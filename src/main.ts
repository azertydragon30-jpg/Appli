import { Engine } from "./core/Engine";
import { GameState } from "./game/GameState";

function resizeCanvas(canvas: HTMLCanvasElement) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("load", () => {
  const canvas = document.getElementById("game") as HTMLCanvasElement | null;
  if (!canvas) throw new Error("Canvas #game introuvable");

  resizeCanvas(canvas);
  window.addEventListener("resize", () => resizeCanvas(canvas));

  const gl = canvas.getContext("webgl2");
  if (!gl) throw new Error("WebGL2 non supporté");

  const gameState = new GameState();
  const engine = new Engine(gl, gameState);

  engine.start();
});
