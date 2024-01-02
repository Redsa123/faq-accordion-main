const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".faq-answer");
const pluses = document.querySelectorAll(".plus");

Array.from(questions).forEach((question) => {
    question.addEventListener("click", () => {
        const answer = Array.from(answers).filter(
            (answer) => answer.classList[0] == question.classList[0]
        );
        answerElement = document
            .querySelector(`.${answer[0].classList[1]}`)
            .classList.toggle("hidden");

        const plus = Array.from(pluses).filter(
            (plus) => plus.classList[0] == question.classList[0]
        );
        if (
            plus[0].src == "http://127.0.0.1:5500/assets/images/icon-plus.svg"
        ) {
            plus[0].src = "http://127.0.0.1:5500/assets/images/icon-minus.svg";
        } else {
            plus[0].src = "http://127.0.0.1:5500/assets/images/icon-plus.svg";
        }
    });
});

Array.from(pluses).forEach((plus) => {
    plus.addEventListener("click", () => {
        const answer = Array.from(answers).filter(
            (answer) => answer.classList[0] == plus.classList[0]
        );
        answerElement = document
            .querySelector(`.${answer[0].classList[1]}`)
            .classList.toggle("hidden");

        const plus = Array.from(pluses).filter(
            (plus) => plus.classList[0] == plus.classList[0]
        );
        if (
            plus[0].src == "http://127.0.0.1:5500/assets/images/icon-plus.svg"
        ) {
            plus[0].src = "http://127.0.0.1:5500/assets/images/icon-minus.svg";
        } else {
            plus[0].src = "http://127.0.0.1:5500/assets/images/icon-plus.svg";
        }
    });
});
