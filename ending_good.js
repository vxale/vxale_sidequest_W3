function drawEndingGood() {
  restartBtn.x = width / 2; // Update x position in case of canvas size change
  background(200, 235, 255);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(38);
  text("Good Ending", width / 2, 270);

  textSize(18);
  text(
    "You slow down and ask if they’re okay.\n" +
      "They’re lost, phone dead — trying to find the right bus stop.\n\n" +
      "You point them the right way, wait until they feel steady,\n" +
      "and they thank you like it mattered.\n\n" +
      "On the rest of your walk, you feel the weight of your choice:\n" +
      "attention is a kind of care.",
    width / 2,
    390,
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
