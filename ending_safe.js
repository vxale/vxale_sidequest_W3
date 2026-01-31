const restartBtn = {
  x: width / 2,
  y: 600,
  w: 260,
  h: 80,
  label: "RESTART",
};

function drawEndingSafe() {
  background(210, 245, 210);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(38);
  text("Safe Ending", width / 2, 270);

  textSize(18);
  text(
    "You take the train and get home safe and sound.\n" +
      "It’s quiet. Predictable. Comfortable.\n\n" +
      "Later, you wonder what you might have missed\n" +
      "by choosing the easiest path.",
    width / 2,
    360,
  );

  drawStoryButton(restartBtn);
  cursor(isHover(restartBtn) ? HAND : ARROW);

  textSize(18);
  text("Click or press the SPACEBAR to restart the story.", width / 2, 650);
}

function endingMousePressed() {
  if (isHover(restartBtn)) {
    currentScreen = "start";
  }
}

function endingKeyPressed() {
  if (key === " ") currentScreen = "start";
}
