const introChoices = {
  train: { x: 260, y: 560, w: 240, h: 80, label: "TAKE THE TRAIN" },
  walk: { x: 540, y: 560, w: 240, h: 80, label: "WALK HOME" },
};

function drawIntro() {
  background(235);

  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Long Way Home at Midnight", width / 2, 80);

  textSize(18);
  text(
    "It’s close to midnight. Your phone battery is low.\n" +
      "You can take the train home — quick and safe.\n" +
      "Or you can walk — longer, quieter, and you’ll pass people on the street.\n\n" +
      "What do you choose?",
    width / 2,
    170,
  );

  drawStoryButton(introChoices.train);
  drawStoryButton(introChoices.walk);

  const over = isHover(introChoices.train) || isHover(introChoices.walk);
  cursor(over ? HAND : ARROW);

  textSize(14);
  fill(80);
  text("Click a choice or press T (train) / W (walk)", width / 2, height - 40);
}

function introMousePressed() {
  if (isHover(introChoices.train)) currentScreen = "ending_safe";
  else if (isHover(introChoices.walk)) currentScreen = "stranger";
}

function introKeyPressed() {
  // Keyboard shortcuts:
  // T = train, W = walk
  if (key === "t" || key === "T") currentScreen = "ending_safe";
  if (key === "w" || key === "W") currentScreen = "stranger";
}

// Shared button style for story screens
function drawStoryButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();
  fill(hover ? color(210, 230, 255, 220) : color(220, 235, 255, 180));
  rect(x, y, w, h, 14);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(22);
  text(label, x, y);
}
