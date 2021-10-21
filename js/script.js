// document.body.style.backgroundColor = "red";
const elements = {
    question: document.getElementById('question'),
    options: document.querySelectorAll('.option-text'),
    levelsContainer: document.querySelector('.game-area__levels'),

    // optionOne: document.getElementById('option_one'),
    // optionTwo: document.getElementById('option_two'),
    // optionThree: document.getElementById('option_three'),
    // optionFour: document.getElementById('option_four'),
};

const levels = [100, 200, 400];

const optionButtons = document.querySelectorAll('.option');

const questions = [
    {
        question: 'Question 1',
        options: ['Test Option 1', 'Test Option 2', 'Test Option 3', 'Test Option 4'],
        answer: 0,
    },
    {
        question: 'Question 2',
        options: ['Test Option 1', 'Test Option 2', 'Test Option 3', 'Test Option 4'],
        answer: 2,
    },
    {
        question: 'Question 3',
        options: ['Test Option 1', 'Test Option 2', 'Test Option 3', 'Test Option 4'],
        answer: 1,
    },
];

let currentQuestionIndex = -1;

function loadNextQuestion() {
    currentQuestionIndex = currentQuestionIndex + 1;
    if (currentQuestionIndex > (questions.length - 1)) {
        return;
    }
    const nextQuestion = questions[currentQuestionIndex];
    elements.question.textContent = nextQuestion.question;
    for(let i = 0; i < nextQuestion.options.length; i++) {
        elements.options[i].textContent = nextQuestion.options[i];
    }

    // elements.question.textContent = nextQuestion.question;
    // elements.optionOne.textContent = nextQuestion.optionOne;
    // elements.optionTwo.textContent = nextQuestion.optionTwo;
    // elements.optionThree.textContent = nextQuestion.optionThree;
    // elements.optionFour.textContent = nextQuestion.optionFour;
}

function moveToNextLevel() {
    // remove current active
    const current = elements.levelsContainer.querySelector('.active');
    if (current) {
        current.classList.remove('active');
    }
    const nextLevelIndex = levels.length - currentQuestionIndex - 1;
    elements.levelsContainer.children[nextLevelIndex].classList.add('active');
}

function checkAnswer(e) {
    const index = Number(e.target.getAttribute('data-index'));
    const question = questions[currentQuestionIndex];
    if (index === question.answer) {
        // change the color of this option to green
        e.target.style.backgroundColor = "green";
        // move to next level
        moveToNextLevel();
        // after 2seconds, load the next question
        setTimeout(function() {
            e.target.style.backgroundColor = "transparent";
            loadNextQuestion();
        }, 2000);
        // remove the green color
        // loadNextQuestion();
    } else {
        alert('Incorrect');
    }
    // alert('clicked');
    // check if this is the right option
    // if this is the right option
    // else if this option is wrong
        // make option red
        // end game
        // comment
}


for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].addEventListener('click', checkAnswer);
}



function insertGameAreaLevels() {
    levels.forEach((level) => {
        const levelElement = document.createElement('p');
        levelElement.classList.add('level');
        levelElement.textContent = "$" + level;
        elements.levelsContainer.prepend(levelElement);
    });
}

function startGame() {
    loadNextQuestion();
    insertGameAreaLevels();
}



startGame();
