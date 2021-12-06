const question = document.querySelectorAll("h2");
console.log(question);
const [question1, question2, question3, question4, question5] = question;
console.log(question1);
const answers = document.querySelectorAll("p");
console.log(answers);
const [answer1, answer2, answer3, answer4, answer5] = answers;

// answers.forEach((answer) => {
//   answer.style.display = "none";
// });
question1.addEventListener("click", () => {
  question1.style.fontWeight = "bold";
  answer1.classList.add("show");
  console.log(document.querySelector(".answer-1").className);
});
