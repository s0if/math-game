const startGaming = document.querySelector(".start");
const score = document.querySelector('.score');
const timer = document.querySelector('.timer');
const box = document.querySelector('.boxone');
const endTime = document.querySelector('.endTime ');
const addScore = document.querySelector('.endTime span');
const state = document.querySelector('.state');
let numscope = 0;
let intervalId;
let corectAnswer;
const multi = () => {
    let number1 = Math.round(9 * Math.random());
    let number2 = Math.round(9 * Math.random());
    corectAnswer = number1 * number2;
    box.innerHTML = `${number1} x ${number2}`;
    answerBox(number1, number2);
}

const answerBox = (number1, number2) => {
    select = 1 + Math.round(3 * Math.random())
    answer = document.querySelector(`.answer${select}`);
    for (let i = 1; i <= 4; i++) {
        wrongAnswer = 1 + Math.round(99 * Math.random())
        if (wrongAnswer == number1 * number2) {
            i--;
            continue;
        }
        selectWrongAnswer = document.querySelector(`.answer${i}`);
        selectWrongAnswer.innerHTML = `${wrongAnswer}`;
    }
    answer.innerHTML = `${number1 * number2}`;
}

const countaier = (timeTimer) => {
    intervalId = setInterval(() => {
        if (timeTimer != 0) {
            timer.classList.add('d-block');
            timeTimer--;
            timer.innerHTML = `timer: ${timeTimer}`;
        }
        else {
            timer.classList.remove('d-block');
            addScore.textContent = `your score is: ${numscope}`
            endTime.classList.add('d-flex');
            setTimeout(() => {
                endTime.classList.remove('d-flex');
            }, 5000);
            startGaming.textContent = "satrt game";
            clearInterval(intervalId);
        }
    }, 1000);
}

const change = () => {
    let timeTimer = 10;
    countaier(timeTimer);
    clearInterval(countaier);
    score.textContent = `score ${numscope}`;
    startGaming.textContent = "restart game";
    multi();
    for (let i = 1; i <= 4; i++) {
        const selectButton = document.querySelector(`.answer${i}`);
        selectButton.onclick = () => {
            if (timeTimer != 0) {
                console.log(corectAnswer)
                if (selectButton.innerHTML == corectAnswer) {
                    state.classList.add("d-flex")
                    numscope += 1;
                    setTimeout(() => {
                        state.classList.remove("d-flex")
                    }, 5000);

                }
                else {
                    state.textContent = 'try again';
                    state.classList.add("bg-red")
                    state.classList.add("d-flex")
                    setTimeout(() => {
                        state.classList.remove("d-flex")
                    }, 5000);
                }
                clearInterval(intervalId);
            }
            score.textContent = `score ${numscope}`;
            multi();
            countaier(timeTimer);
        }

    }
}

startGaming.onclick = change;
