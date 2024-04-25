document.addEventListener('DOMContentLoaded', function() {
  const selectedQuiz = JSON.parse(localStorage.getItem('selectedQuiz'));
  const quizTitleElement = document.getElementById('quiz-title');
  const questionsContainer = document.getElementById('questions-container');

  quizTitleElement.textContent = selectedQuiz.title;

  selectedQuiz.questions.forEach((question, questionIndex) => {
      const questionElement = document.createElement('div');
      questionElement.innerHTML = `<p>Q${questionIndex + 1}. ${question.question}</p>`;

      question.options.forEach((option, optionIndex) => {
          const optionID = `q${questionIndex}-option${optionIndex}`;
          questionElement.innerHTML += `
              <div class="form-check">
                  <input class="form-check-input" type="radio" name="answer${questionIndex}" id="${optionID}">
                  <label class="form-check-label" for="${optionID}">${option}</label>
              </div>
          `;
      });

      questionsContainer.appendChild(questionElement);
  });

  document.getElementById('submit-quiz').addEventListener('click', function() {
      calculateScore(selectedQuiz);
  });
});

function calculateScore(quiz) {
  let score = 0;
  quiz.questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="answer${index}"]:checked`);
      if (selectedOption && parseInt(selectedOption.id.split('-option')[1]) + 1 === question.answer) {
          score++;
      }
  });

  localStorage.setItem('score', score);
  window.location.href = 'Score.html';
}
