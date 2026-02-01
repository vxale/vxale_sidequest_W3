const strangerChoices = {
  help: { x: 260, y: 570, w: 240, h: 80, label: "CHECK IN" },
  ignore: { x: 540, y: 570, w: 240, h: 80, label: "IGNORE" },
};

function drawStranger() {
  background(225);

  strangerChoices.help.x = width / 2 - 140;
  strangerChoices.ignore.x = width / 2 + 140;

  fill(0);
  textAlign(CENTER, TOP);
  textSize(34);
  text("A Stranger", width / 2, 80);

  textSize(18);
  text(
    "Halfway home, you notice someone standing under a streetlight.\n" +
      "They look anxious as they scan the road, clutching their bag.\n\n" +
      "You hesitate.\n" +
      "Stopping could help… or it could be risky.\n" +
      "Walking past is easy… but what if they need someone to notice?\n\n" +
      "What do you do?",
    width / 2,
    170,
  );

  drawStoryButton(strangerChoices.help);
  drawStoryButton(strangerChoices.ignore);

  const over = isHover(strangerChoices.help) || isHover(strangerChoices.ignore);
  cursor(over ? HAND : ARROW);

  textSize(14);
  fill(80);
  text("Click a choice or press H (help) / I (ignore)", width / 2, height - 40);
}

function strangerMousePressed() {
  if (isHover(strangerChoices.help)) currentScreen = "ending_good";
  else if (isHover(strangerChoices.ignore)) currentScreen = "ending_bad";
}

function strangerKeyPressed() {
  // H = help, I = ignore
  if (key === "h" || key === "H") currentScreen = "ending_good";
  if (key === "i" || key === "I") currentScreen = "ending_bad";
}
