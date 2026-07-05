const questionsByRole = {
  general: [
    "Tell me about a time you solved a difficult problem.",
    "How do you handle feedback on your work?",
    "Describe a time you had to learn something quickly.",
    "Where do you see yourself in 5 years?",
  ],
  frontend: [
    "How do you stay up to date with new frontend trends and tools?",
    "Describe a project where you worked with a team to build a UI.",
    "What is your process for debugging a broken layout?",
    "How do you approach making a website responsive?",
  ],
  backend: [
    "How do you design a database schema for a new feature?",
    "Describe a time you optimized a slow API endpoint.",
    "How do you handle errors in a production system?",
    "What's your approach to writing secure APIs?",
  ],
};

const roleSelect = document.getElementById("roleSelect");
const getQuestionBtn = document.getElementById("getQuestionBtn");
const submitAnswerBtn = document.getElementById("submitAnswerBtn");
const questionDiv = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const feedbackDiv = document.getElementById("feedback");

function getRandomQuestion(role) {
  const questionList = questionsByRole[role];
  const index = Math.floor(Math.random() * questionList.length);
  return questionList[index];
}

getQuestionBtn.addEventListener("click", () => {
  const selectedRole = roleSelect.value;
  questionDiv.textContent = getRandomQuestion(selectedRole);
  feedbackDiv.textContent = "";
  feedbackDiv.classList.remove("warn", "info");
  answerInput.value = "";
  answerInput.focus();
});

submitAnswerBtn.addEventListener("click", () => {
  const answer = answerInput.value.trim();
  feedbackDiv.classList.remove("warn", "info");

  if (!answer) {
    feedbackDiv.textContent = "Please type your answer before submitting.";
    feedbackDiv.classList.add("warn");
    return;
  }

  const wordCount = answer.split(/\s+/).length;

  if (wordCount < 15) {
    feedbackDiv.textContent =
      "Your answer is a bit short. Try adding a specific example or more detail.";
    feedbackDiv.classList.add("warn");
  } else if (wordCount < 40) {
    feedbackDiv.textContent =
      "Good length! Consider structuring it with the STAR method (Situation, Task, Action, Result).";
  } else {
    feedbackDiv.textContent =
      "Very detailed answer! Just make sure it stays focused and doesn't ramble.";
    feedbackDiv.classList.add("info");
  }
});
