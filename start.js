// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file defines:
// 1) drawStart() → start/menu screen visuals
// 2) startMousePressed() / startKeyPressed() → input handlers
// 3) drawButton() → helper to render menu buttons

function drawStart() {
  background(180, 225, 220);

  // Title
  fill(30, 50, 60);
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Long Way Home at Midnight", width / 2, 170);

  // Subtitle / tone line
  textSize(18);
  fill(40, 60, 70);
  text(
    "A short interactive story about choices and consequence.",
    width / 2,
    220,
  );

  // Buttons
  const startBtn = {
    x: width / 2,
    y: 340,
    w: 260,
    h: 80,
    label: "START STORY",
  };

  const instrBtn = {
    x: width / 2,
    y: 450,
    w: 260,
    h: 80,
    label: "INSTRUCTIONS",
  };

  drawButton(startBtn);
  drawButton(instrBtn);

  // Cursor feedback
  const over = isHover(startBtn) || isHover(instrBtn);
  cursor(over ? HAND : ARROW);

  // Small hint
  textSize(14);
  fill(70);
  text("Press ENTER to start • Press I for instructions", width / 2, 540);
}

function startMousePressed() {
  const startBtn = { x: width / 2, y: 340, w: 260, h: 80 };
  const instrBtn = { x: width / 2, y: 450, w: 260, h: 80 };

  if (isHover(startBtn)) {
    currentScreen = "intro";
  } else if (isHover(instrBtn)) {
    currentScreen = "instr";
  }
}

function startKeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = "intro";
  }

  if (key === "i" || key === "I") {
    currentScreen = "instr";
  }
}

function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(255, 200, 150, 220);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill(255, 240, 210, 210);
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  rect(x, y, w, h, 14);

  drawingContext.shadowBlur = 0;

  fill(40, 60, 70);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
