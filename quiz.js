/*jshint esversion: 9 */
const quizData = [
    {
        question: "Írországon kívűl melyik országban vezetnek a bal oldalon?",
        a: "Görögország" ,
        b: "Málta" ,
        c: "Hollandia" ,
        d: "Bulgária" ,
        correct: "b",
    },
    {
        question: "z",
        a: "a" ,
        b: "b" ,
        c: "c" ,
        d: "d" ,
        correct: "c",
    },
    {
        question: "x",
        a: "e" ,
        b: "f" ,
        c: "g" ,
        d: "h" ,
        correct: "d",
    },


];

const quiz= document.getElementById('quiz') ;
const answerEls = document.querySelectorAll('.answer') ;
const questionEl = document.getElementById('question') ;
const a_text = document.getElementById('a_text')  ;
const b_text = document.getElementById('b_text')  ;
const c_text = document.getElementById('d_text')  ;
const d_text = document.getElementById('c_text') ; 
const submitBtn = document.getElementById('submit') ;


let currentQuiz = 0 ;
let score = 0 ;


loadQuiz() ;

function loadQuiz() {

    deselectAnswers() ;

    const currentQuizData = quizData [currentQuiz] ;

    questionEl.innerText = currentQuizData.question ;
    a_text.innerText = currentQuizData.a ;
    b_text.innerText = currentQuizData.b ;
    c_text.innerText = currentQuizData.c ;
    d_text.innerText = currentQuizData.d ;

}


function deselectAnswers() {

    answerEls.forEach(answerEls => answerEls.childElementCount = false) ;

}

function getSelected() {
    let answerEls ; 
    answerEls.forEach(answerEls => {
        if(answerEl.checked) {
            answer = answerEls.id ;

        }

    });
    return answer;
}

