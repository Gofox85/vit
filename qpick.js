const questions = {
  easy: [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
    },
    {
      question: "Which is a fruit?",
      options: ["Carrot", "Apple", "Lettuce", "Potato"],
    },
    {
      question: "What color is the sky on a clear day?",
      options: ["Red", "Blue", "Green", "Yellow"],
    }
  ],
  medium: [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      question: "What is 15 x 3?",
      options: ["30", "45", "60", "20"],
    }
  ],
  hard: [
    {
      question: "What is the derivative of x²?",
      options: ["x", "2x", "x²", "1"],
    },
    {
      question: "Which language is prim arily used for data science?",
      options: ["HTML", "Python", "CSS", "Java"],
    },
    {
      question: "What is the chemical symbol for Gold?",
      options: ["Au", "Ag", "Go", "Gd"],
    }
  ]
};
function loadQuestions(level) {
  const container = document.getElementById("quiz-container");
  const levelQuestions = questions[level];
  container.innerHTML = "";
  const heading = document.createElement("h2");
  heading.textContent = level.charAt(0).toUpperCase() + level.slice(1) + " Level Questions";
  heading.style.marginBottom = "20px";
  container.appendChild(heading);
  for (let i = 0; i < levelQuestions.length; i++) {
    const q = levelQuestions[i];
    const card = document.createElement("div");
    card.className = "question-card";
    const questionText = document.createElement("h3");
    questionText.textContent = `Q${i + 1}: ${q.question}`;
    card.appendChild(questionText);
    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";
    for (let j = 0; j < q.options.length; j++) {
      const option = q.options[j];
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${i}`;
      input.value = option;
      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + option));
      optionsDiv.appendChild(label);
    }
    card.appendChild(optionsDiv);
    container.appendChild(card);
  }
}