const questions = document.querySelectorAll("h2");
console.log(questions);
const [question1, question2, question3, question4, question5] = questions;
console.log(question1);
const answers = document.querySelectorAll("p");
console.log(answers);
const [answer1, answer2, answer3, answer4, answer5] = answers;
const arrows = document.querySelectorAll(".question-container img");
console.log(arrows);

// answers.forEach((answer) => {
//   answer.style.display = "none";
// });
// question1.addEventListener("click", () => {
//   question1.style.fontWeight = "bold";
//   answer1.classList.add("show");
//   console.log(document.querySelector(".answer-1").className);
// });

// questions.forEach((question, index) => {
//   question.addEventListener("click", (event) => {
//     console.log(event.target);
//     event.target.style.fontWeight = "bold";
//     answer1.classList.toggle(`show-${index}`);
//   });
// });

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    const target = event.target.previousElementSibling;
    //console.log(event.target.previousElementSibling);
    target.classList.toggle("selected");
    if (target.className.includes("1")) {
      answer1.classList.toggle(`show-0`);
    } else if (target.className.includes("2")) {
      answer2.classList.toggle("show-1");
    } else if (target.className.includes("3")) {
      answer3.classList.toggle("show-2");
    } else if (target.className.includes("4")) {
      answer4.classList.toggle("show-3");
    } else if (target.className.includes("5")) {
      answer5.classList.toggle("show-4");
    }
  });
});
