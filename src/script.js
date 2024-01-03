const questions = document.querySelectorAll(".question");
const answears = document.querySelectorAll(".faq-answear");
const pluses = document.querySelectorAll(".plus");
const plus1 = document.querySelector(".plus1");
const plus2 = document.querySelector(".plus2");
const plus3 = document.querySelector(".plus3");
const plus4 = document.querySelector(".plus4");

Array.from(questions).forEach((question) => {
    question.addEventListener("click", () => {
        const answear = Array.from(answears).filter(
            (answear) => answear.classList[0] == question.classList[0]
        );
        answearElement = document
            .querySelector(`.${answear[0].classList[1]}`)
            .classList.toggle("hidden");

        const plus = Array.from(pluses).filter(
            (plus) => plus.classList[0] == question.classList[0]
        );
        if (plus[0].src == "http://127.0.0.1:5500/src/images/icon-plus.svg") {
            plus[0].src = "http://127.0.0.1:5500/src/images/icon-minus.svg";
        } else {
            plus[0].src = "http://127.0.0.1:5500/src/images/icon-plus.svg";
        }
        console.log(plus[0]);
    });
});

plus1.addEventListener("click", () => {
    document.querySelector(".answear1").classList.toggle("hidden");
    if (plus1.src == "./images/icon-plus.svg") {
        plus1.src = "./images/icon-minus.svg";
    } else {
        plus1.src = "./images/icon-plus.svg";
    }

    console.log(plus1.src);
});
plus2.addEventListener("click", () => {
    document.querySelector(".answear2").classList.toggle("hidden");
    if (plus2.src == "http://127.0.0.1:5500/src/images/icon-plus.svg") {
        plus2.src = "http://127.0.0.1:5500/src/images/icon-minus.svg";
    } else {
        plus2.src = "http://127.0.0.1:5500/src/images/icon-plus.svg";
    }
});
plus3.addEventListener("click", () => {
    document.querySelector(".answear3").classList.toggle("hidden");
    if (plus3.src == "http://127.0.0.1:5500/src/images/icon-plus.svg") {
        plus3.src = "http://127.0.0.1:5500/src/images/icon-minus.svg";
    } else {
        plus3.src = "http://127.0.0.1:5500/src/images/icon-plus.svg";
    }
});
plus4.addEventListener("click", () => {
    document.querySelector(".answear4").classList.toggle("hidden");
    if (plus4.src == "http://127.0.0.1:5500/src/images/icon-plus.svg") {
        plus4.src = "http://127.0.0.1:5500/src/images/icon-minus.svg";
    } else {
        plus4.src = "http://127.0.0.1:5500/src/images/icon-plus.svg";
    }
});
