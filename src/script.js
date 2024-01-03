const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".faq-answer");
const pluses = document.querySelectorAll(".plus");
const plus1 = document.querySelector(".plus1");
const plus2 = document.querySelector(".plus2");
const plus3 = document.querySelector(".plus3");
const plus4 = document.querySelector(".plus4");

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

plus1.addEventListener("click", () => {
    document.querySelector(".answer1").classList.toggle("hidden");
    if (plus1.src == "http://127.0.0.1:5500/assets/images/icon-plus.svg") {
        plus1.src = "http://127.0.0.1:5500/assets/images/icon-minus.svg";
    } else {
        plus1.src = "http://127.0.0.1:5500/assets/images/icon-plus.svg";
    }
});
plus2.addEventListener("click", () => {
    document.querySelector(".answer2").classList.toggle("hidden");
    if (plus2.src == "http://127.0.0.1:5500/assets/images/icon-plus.svg") {
        plus2.src = "http://127.0.0.1:5500/assets/images/icon-minus.svg";
    } else {
        plus2.src = "http://127.0.0.1:5500/assets/images/icon-plus.svg";
    }
});
plus3.addEventListener("click", () => {
    document.querySelector(".answer3").classList.toggle("hidden");
    if (plus3.src == "http://127.0.0.1:5500/assets/images/icon-plus.svg") {
        plus3.src = "http://127.0.0.1:5500/assets/images/icon-minus.svg";
    } else {
        plus3.src = "http://127.0.0.1:5500/assets/images/icon-plus.svg";
    }
});
plus4.addEventListener("click", () => {
    document.querySelector(".answer4").classList.toggle("hidden");
    if (plus4.src == "http://127.0.0.1:5500/assets/images/icon-plus.svg") {
        plus4.src = "http://127.0.0.1:5500/assets/images/icon-minus.svg";
    } else {
        plus4.src = "http://127.0.0.1:5500/assets/images/icon-plus.svg";
    }
});
