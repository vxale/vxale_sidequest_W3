function drawEndingBad() {
  restartBtn.x = width / 2; // Update x position in case of canvas size change
  background(255, 220, 220);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(38);
  text("Bad Ending", width / 2, 270);

  textSize(18);
  text(
    "You keep walking.\n\n" +
      "A block later, you hear raised voices behind you.\n" +
      "You don’t turn around.\n\n" +
      "At home, the quiet doesn’t feel right.\n" +
      "It feels like avoidance.\n\n" +
      "Indifference doesn’t always look like cruelty.\n" +
      "Sometimes it looks like walking away.",
    width / 2,
    400,
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
