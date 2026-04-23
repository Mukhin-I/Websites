const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

const optionElements = document.querySelectorAll('.option');
const question = document.getElementById('question');
const numberOfQuestion  = document.getElementById('number-of-question');
const numberOfAllQuestions  = document.getElementById('number-of-all-questions');
const answersTracker = document.getElementById('answers-tracker');
let indexOfQuestion,
    indexOfPage = 0;

const btnNext = document.getElementById('btn-next');
let score = 0;
const yourRes = document.querySelector('.your-res');
const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');

const questions = [
    {
        question: 'Когда началась ВОв',
        options: [
            '20 июня 1941г',
            '22 июня 1941г',
            '10 сентября 1941г',
            '9 мая 1941г',
        ],
        rightAnswer: 1
    },
    {
        question: 'Когда закончилась ВОв',
        options: [
            '8 мая 1945г',
            '23 февраля 1944г',
            '10 апреля 1946г',
            '9 мая 1945г',
        ],
        rightAnswer: 3
    },
    {
        question: 'В каком городе состоялся первый парад победы',
        options: [
            'Брендан ЭйхБерлин',
            'Ленинград',
            'Москва',
            'Брест',
        ],
        rightAnswer: 2
    },
    {
        question: 'Кто руководил СССР в период ВОв',
        options: [
            'Иосиф Сталин',
            'Георгий Жуков',
            'Владимир Ленин',
            'Никита Хрущёв',
        ],
        rightAnswer: 0
    },
    {
        question: 'По какому озеру проходила "дорога жизни"',
        options: [
            'Онежское',
            'Байкал',
            'Ладожское',
            'Каспийское море',
        ],
        rightAnswer: 2
    }
];

numberOfAllQuestions.innerHTML = questions.length;

const load = () =>{
    question.innerHTML = questions[indexOfQuestion].question;

    option1.innerHTML=questions[indexOfQuestion].options[0];
    option2.innerHTML=questions[indexOfQuestion].options[1];
    option3.innerHTML=questions[indexOfQuestion].options[2];
    option4.innerHTML=questions[indexOfQuestion].options[3];
    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++;
};

let completedAnswers = [];
const randomQuestion = () =>{
    let randomNumber = Math.floor(Math.random()*questions.length);
    let hitDuplicate = false;
    if(indexOfPage == questions.length){
        quizOver()
    }else{
        if(completedAnswers.length > 0){
            completedAnswers.forEach(item=>{
                if(item == randomNumber){
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate){
                randomQuestion();
            }else{
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(completedAnswers.length == 0){
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer){
        el.target.classList.add('correct');
        score++;
        updateAnswerTracker('correct');
    }else{
        updateAnswerTracker('wrong');
        el.target.classList.add('wrong');
    }
    disabledOptions();
}

for(option of optionElements){
    option.addEventListener('click', e => checkAnswer(e));
}

const disabledOptions = () =>{
    optionElements.forEach(item =>{
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer){
            item.classList.add('correct');
        }
    })
}

const enableOptions = () =>{
    optionElements.forEach(item =>{
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}

const validate = () =>{
    if(!optionElements[0].classList.contains('disabled')){
        alert('Вам нужно выбрать вариант ответа');
    }else{
        enableOptions();
        randomQuestion();
    }
}


const answerTracker = () =>{
    questions.forEach(()=>{
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
}

const updateAnswerTracker = status =>{
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const quizOver = () =>{
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
    if(score<3){
        yourRes.innerHTML = 'Можешь лучше!'
    }
    if(score==5){
        yourRes.innerHTML = 'Отличный результат!'
    }
};

const tryAgain = () =>{
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

btnNext.addEventListener('click', ()=>{
    validate();
})

window.addEventListener('load', ()=>{
    randomQuestion();
    answerTracker();
});