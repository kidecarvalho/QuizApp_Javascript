
const quizData = [
    {
      question: "What does CSS stand for?",
      a: "Cascading Style Sheets",
      b: "Computer Style Sheets",
      c: "Colorful Style Sheets",
      d: "Creative Style Sheets",
      correct: "a",
    },
    {
      question: "What is the purpose of JavaScript?",
      a: "To create and style web pages",
      b: "To make web pages interactive",
      c: "To manage server-side databases",
      d: "To design user interfaces",
      correct: "b",
    },
    {
      question: "Which of the following is NOT a type of web development?",
      a: "Front-end development",
      b: "Back-end development",
      c: "Full-stack development",
      d: "Side-end development",
      correct: "d",
    },
    {
      question: "What is the default method used by HTML forms?",
      a: "GET",
      b: "POST",
      c: "PUT",
      d: "DELETE",
      correct: "a",
    },
    {
      question: "Which of the following is NOT a popular front-end framework?",
      a: "React",
      b: "Angular",
      c: "Vue",
      d: "Node.js",
      correct: "d",
    },
  ];

  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')

  let currentQuiz = 1
  
  let score = 0

  loadQuiz()

  function loadQuiz(){

    deselectAnswers()

      const currentQuizData = quizData[currentQuiz]

      questionEl.innerText = currentQuizData.question
      a_text.innerText = currentQuizData.a
      b_text.innerText = currentQuizData.b
      c_text.innerText = currentQuizData.c
      d_text.innerText = currentQuizData.d
  }

  function deselectAnswers() {
      answerEls.forEach(answerEl => answerEl.checked = false)
  }

 function getSelected() {
      let answer

      answerEls.forEach(answerEl => {
          if(answerEl.checked) {
              answer = answerEl.id
          }
      })
      return answer
  }

  submitBtn.addEventListener('click', () => {
        const answer = getSelected()

        if(answer) {
            if(answer === quizData[currentQuiz].correct) {
                score++
            }

            currentQuiz++

            if(currentQuiz < quizData.length) {
                loadQuiz()
            } else {
                quiz.innerHTML = `
                    <h2>You answered ${score}/${quizData.length} questions correctly!</h2>

                    <button onclick="location.reload()">Reload</button>
                `
            }
        }
  })