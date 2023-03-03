const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Melyik országban vannak elmosódások a térképen?',
        choice1:'Németország',
        choice2:'Ausztria',
        choice3:'Lengyelország',
        choice4:'Spanyolország',
        answer: 1,
    },
    {
        question: 'Melyik ország fővárosa Tallinn?',
        choice1:'Észtország',
        choice2:'Horvátország',
        choice3:'Finnország',
        choice4:'Litvánia',
        answer: 1,
    },
    {
        question: 'Melyik országban használnak ciril betűket?',
        choice1:'Románia',
        choice2:'Bulgária',
        choice3:'Lengyelország',
        choice4:'Lettország',
        answer: 2,
    },
    {
        question: 'Melyik országban vezetnek a bal oldalon?',
        choice1:'Görögország',
        choice2:'Portugália',
        choice3:'Málta',
        choice4:'Horvátország',
        answer: 3,
    },
    {
        question: 'Melyik országban sárgák a rendszámot?',
        choice1:'Belgium',
        choice2:'Svédország',
        choice3:'Dánia',
        choice4:'Hollandia',
        answer: 4,
    },
    {
        question: 'Melyik országban nem használják a W-t?',
        choice1:'Lettország',
        choice2:'Szlovénia',
        choice3:'Olaszország',
        choice4:'Németország',
        answer: 2,
    },
    {
        question: 'Melyik országban van kettő kék csík a rendszámokon?',
        choice1:'Belgium',
        choice2:'Írország',
        choice3:'Portugália',
        choice4:'Franciaország',
        answer: 4,
    },
    {
        question: 'Melyik országban van egy kék és egy sárga csík a rendszámokon?',
        choice1:'Portugália',
        choice2:'Olaszország',
        choice3:'Németország',
        choice4:'Ausztria',
        answer: 1,
    },
    {
        question: 'Melyik országban van pirossal körülvéve a rendszám?',
        choice1:'Luxemburg',
        choice2:'Magyarország',
        choice3:'Belgium',
        choice4:'Szlovákia',
        answer: 3,
    },
    {
        question: 'Melyik ország nem tagja az Európai Uniónak?',
        choice1:'Málta',
        choice2:'Svájc',
        choice3:'Bulgária',
        choice4:'Finnország',
        answer: 2,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {

    questionCounter = 0 
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    } 
    
    questionCounter++
    progressText.innerText = `Kérdés ${questionCounter} a ${MAX_QUESTIONS}-ből`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question


    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
} 

choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target 
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(()=> {
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()

            }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}


startGame()