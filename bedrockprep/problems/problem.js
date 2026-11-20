(function () {
  // Original demo problems (not from the live site) used as stand-ins so every
  // card in the question bank opens a working interactive page.
  var SAMPLES = {
    easy: {
      prompt: "If f(x) = 3x + 5, what is f(4)?",
      choices: ["9", "12", "17", "20"],
      correctIndex: 2,
      solution: "Substitute x = 4 into f(x) = 3x + 5: f(4) = 3(4) + 5 = 12 + 5 = 17."
    },
    medium: {
      prompt: "A line passes through the points (2, 1) and (6, 13). What is the slope of the line?",
      choices: ["2", "3", "4", "6"],
      correctIndex: 1,
      solution: "Slope = (13 − 1) / (6 − 2) = 12 / 4 = 3."
    },
    hard: {
      prompt: "The product of two consecutive positive integers is 132. What is the sum of the two integers?",
      choices: ["21", "23", "24", "25"],
      correctIndex: 1,
      solution: "Let the integers be n and n + 1, so n(n + 1) = 132, i.e. n² + n − 132 = 0. " +
        "Factoring: (n − 11)(n + 12) = 0, so n = 11 (the positive root). The integers are 11 and 12, " +
        "and their sum is 23."
    }
  };

  function qs(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  var difficulty = (qs("difficulty") || "easy").toLowerCase();
  if (!SAMPLES[difficulty]) difficulty = "easy";
  var sample = SAMPLES[difficulty];

  var number = qs("number") || "?";
  var name = qs("name") || "Problem";
  var topic = qs("topic") || "";
  var domain = qs("domain") || "";
  var id = qs("id") || "";

  document.title = name + " - Bedrock";
  document.getElementById("p-number").textContent = "Problem " + number;
  document.getElementById("p-name").textContent = name;

  var badge = document.getElementById("p-badge");
  badge.textContent = difficulty;
  badge.className = "qb-badge badge-" + difficulty;

  if (domain) document.getElementById("bc-domain").textContent = domain;
  if (topic) document.getElementById("bc-topic").textContent = topic;

  document.getElementById("p-prompt").textContent = sample.prompt;

  var liveLink = document.getElementById("live-site-link");
  liveLink.href = "https://www.bedrockprep.com/problems/" + encodeURIComponent(id || "");

  var choicesForm = document.getElementById("choices");
  var selected = null;
  sample.choices.forEach(function (choiceText, i) {
    var label = document.createElement("label");
    label.className = "choice";
    label.dataset.index = i;

    var input = document.createElement("input");
    input.type = "radio";
    input.name = "choice";
    input.value = i;

    label.appendChild(input);
    label.appendChild(document.createTextNode(choiceText));
    choicesForm.appendChild(label);

    input.addEventListener("change", function () {
      choicesForm.querySelectorAll(".choice").forEach(function (el) {
        el.classList.remove("selected", "correct", "incorrect");
      });
      label.classList.add("selected");
      selected = i;
    });
  });

  var feedback = document.getElementById("feedback");

  document.getElementById("submit-btn").addEventListener("click", function () {
    if (selected === null) {
      feedback.hidden = false;
      feedback.style.color = "#6b6b6b";
      feedback.textContent = "Pick an answer first.";
      return;
    }
    var labels = choicesForm.querySelectorAll(".choice");
    labels.forEach(function (el, i) {
      el.classList.remove("selected");
      if (i === sample.correctIndex) el.classList.add("correct");
      else if (i === selected) el.classList.add("incorrect");
    });
    feedback.hidden = false;
    if (selected === sample.correctIndex) {
      feedback.style.color = "var(--green-dark)";
      feedback.textContent = "Correct!";
    } else {
      feedback.style.color = "var(--coral-dark)";
      feedback.textContent = "Not quite — try “Show solution” below.";
    }
  });

  var solutionBox = document.getElementById("solution");
  var solutionBtn = document.getElementById("solution-btn");
  document.getElementById("solution-text").textContent = sample.solution;
  solutionBtn.addEventListener("click", function () {
    var show = solutionBox.hidden;
    solutionBox.hidden = !show;
    solutionBtn.textContent = show ? "Hide solution" : "Show solution";
  });
})();
