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
        question: 'Когда Ленинград был освобождён от блокады немецко-фашистских войск',
        options: [
            '31 августа',
            '23 февраля',
            '9 мая',
            '27 января',
        ],
        rightAnswer: 3
    },
    {
        question: 'День памяти погибших в Первой мировой войне. В этот день в 1914 году Германия объявила войну России',
        options: [
            '1 сентября',
            '22 июня',
            '1 августа',
            '6 июля',
        ],
        rightAnswer: 2
    },
    {
        question: 'В этот день в 1814 году русские войска и их союзники вступили в Париж',
        options: [
            '31 января',
            '31 марта',
            '28 июля',
            '6 октября',
        ],
        rightAnswer: 1
    },
    {
        question: 'В этот день в 1945 году советские войска взяли германскую мощную крепость Кенигсберг',
        options: [
            '9 ноября',
            '7 матра',
            '28 декабря',
            '9 апреля',
        ],
        rightAnswer: 3
    },
    {
        question: 'День памяти о погибших в Великой Отечественной войне. В этот день в 1941 году фашистская Германия напала на СССР',
        options: [
            '21 апреля',
            '22 июня',
            '20 декабря',
            '22 июля',
        ],
        rightAnswer: 1
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