// Liquid-distortion hero background: the grid and glow bend around the cursor
// and ripple outward as it moves. Falls back to the static CSS grid without WebGL.

const MAX_RIPPLES = 10;

const VERTEX = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAGMENT = `
precision highp float;

uniform vec2 uRes;
uniform float uDpr;
uniform float uTime;
uniform vec2 uMouse;
uniform float uHover;
uniform vec4 uRipples[${MAX_RIPPLES}];
uniform vec3 uLine;
uniform float uLineAlpha;
uniform vec3 uGlowA;
uniform vec3 uGlowB;
uniform float uGlowAlpha;

float blob(vec2 p, vec2 c, vec2 r) {
  vec2 d = (p - c) / r;
  return exp(-dot(d, d));
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  vec2 q = p;

  // Lens bulge that follows the cursor.
  vec2 dm = p - uMouse;
  float lensR = 240.0 * uDpr;
  float lens = exp(-dot(dm, dm) / (lensR * lensR)) * uHover;
  q -= dm * lens * 0.38;

  // Slow ambient drift so the surface never looks frozen.
  q += vec2(
    sin(p.y * 0.0055 / uDpr + uTime * 0.55),
    cos(p.x * 0.0045 / uDpr + uTime * 0.45)
  ) * 2.5 * uDpr;

  // Expanding ripple rings left behind by the cursor.
  float energy = 0.0;
  for (int i = 0; i < ${MAX_RIPPLES}; i++) {
    vec4 rp = uRipples[i];
    float age = uTime - rp.z;
    if (rp.w <= 0.0 || age < 0.0 || age > 3.2) continue;
    vec2 d = p - rp.xy;
    float dist = length(d);
    float front = age * 360.0 * uDpr;
    float band = exp(-pow((dist - front) / (70.0 * uDpr), 2.0));
    float fade = exp(-age * 1.5) * rp.w;
    float wave = sin((dist - front) / (16.0 * uDpr)) * band * fade;
    q += (d / max(dist, 1.0)) * wave * 16.0 * uDpr;
    energy += band * fade;
  }

  float cell = 44.0 * uDpr;
  vec2 g = abs(fract(q / cell - 0.5) - 0.5) * cell;
  float lw = 1.0 * uDpr;
  float line = max(1.0 - smoothstep(0.0, lw, g.x), 1.0 - smoothstep(0.0, lw, g.y));
  float lineA = line * uLineAlpha * (1.0 + lens * 3.0 + energy * 4.0);

  vec2 u = p / uRes;
  float glowA = blob(p, vec2(0.12, 0.0) * uRes, vec2(600.0, 300.0) * uDpr) * 0.9
              + blob(p, uMouse, vec2(340.0, 260.0) * uDpr) * uHover * 0.55;
  float glowB = blob(p, vec2(0.88, 0.2) * uRes, vec2(520.0, 280.0) * uDpr) * 0.6
              + blob(p, uMouse + vec2(120.0, 60.0) * uDpr, vec2(260.0, 200.0) * uDpr) * uHover * 0.45
              + energy * 0.12;

  // Warp the glow with the same field so it ripples with the grid.
  glowA *= max(1.0 + (q.x - p.x) * 0.01 / uDpr, 0.0);

  float fadeOut = 1.0 - smoothstep(0.35, 1.0, u.y);
  vec3 color = uLine * lineA + uGlowA * glowA * uGlowAlpha + uGlowB * glowB * uGlowAlpha;
  float alpha = clamp(lineA + glowA * uGlowAlpha + glowB * uGlowAlpha, 0.0, 1.0);
  gl_FragColor = vec4(color, alpha) * fadeOut;
}
`;

const COLORS = {
  line: [15, 23, 42],
  lineAlpha: 0.07,
  glowA: [37, 87, 232],
  glowB: [8, 145, 178],
  glowAlpha: 0.16,
};

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? "shader compile failed");
  }
  return shader;
}

export function initHeroFluid(hero, canvas) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: true });
  if (!gl) return;

  let program;
  try {
    program = gl.createProgram();
    gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
    gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  } catch {
    return;
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(program, "aPos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  const loc = Object.fromEntries(
    ["uRes", "uDpr", "uTime", "uMouse", "uHover", "uRipples", "uLine", "uLineAlpha", "uGlowA", "uGlowB", "uGlowAlpha"].map(
      (name) => [name, gl.getUniformLocation(program, name)]
    )
  );

  let dpr = 1;
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(hero.clientWidth * dpr);
    canvas.height = Math.round(hero.clientHeight * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
  };
  new ResizeObserver(resize).observe(hero);
  resize();

  const rgb = (values) => values.map((value) => value / 255);
  gl.uniform3fv(loc.uLine, rgb(COLORS.line));
  gl.uniform1f(loc.uLineAlpha, COLORS.lineAlpha);
  gl.uniform3fv(loc.uGlowA, rgb(COLORS.glowA));
  gl.uniform3fv(loc.uGlowB, rgb(COLORS.glowB));
  gl.uniform1f(loc.uGlowAlpha, COLORS.glowAlpha);

  const start = performance.now();
  const now = () => (performance.now() - start) / 1000;
  const ripples = new Float32Array(MAX_RIPPLES * 4);
  let rippleIndex = 0;
  const target = { x: hero.clientWidth * 0.7, y: hero.clientHeight * 0.4 };
  const mouse = { ...target };
  let hover = 0;
  let hoverTarget = 0;
  let last = { x: 0, y: 0, t: 0 };

  const addRipple = (x, y, strength) => {
    ripples.set([x * dpr, y * dpr, now(), strength], rippleIndex * 4);
    rippleIndex = (rippleIndex + 1) % MAX_RIPPLES;
  };

  const local = (event) => {
    const rect = hero.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  hero.addEventListener("pointermove", (event) => {
    const point = local(event);
    target.x = point.x;
    target.y = point.y;
    hoverTarget = 1;
    const t = now();
    const moved = Math.hypot(point.x - last.x, point.y - last.y);
    if (moved > 70 && t - last.t > 0.09) {
      const speed = moved / Math.max(t - last.t, 0.016);
      addRipple(point.x, point.y, Math.min(Math.max(speed / 1800, 0.35), 1));
      last = { x: point.x, y: point.y, t };
    }
  });
  hero.addEventListener("pointerdown", (event) => {
    const point = local(event);
    addRipple(point.x, point.y, 1.6);
  });
  hero.addEventListener("pointerleave", () => (hoverTarget = 0));

  let visible = true;
  let running = false;
  const kick = () => {
    if (running || !visible || document.hidden) return;
    running = true;
    requestAnimationFrame(frame);
  };
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    kick();
  }).observe(hero);

  function frame() {
    if (!visible || document.hidden) {
      running = false;
      return;
    }
    mouse.x += (target.x - mouse.x) * 0.12;
    mouse.y += (target.y - mouse.y) * 0.12;
    hover += (hoverTarget - hover) * 0.06;

    gl.uniform2f(loc.uRes, canvas.width, canvas.height);
    gl.uniform1f(loc.uDpr, dpr);
    gl.uniform1f(loc.uTime, now());
    gl.uniform2f(loc.uMouse, mouse.x * dpr, mouse.y * dpr);
    gl.uniform1f(loc.uHover, hover);
    gl.uniform4fv(loc.uRipples, ripples);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(frame);
  }

  document.addEventListener("visibilitychange", kick);

  hero.classList.add("is-fluid");
  kick();
}
