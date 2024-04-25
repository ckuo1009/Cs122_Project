document.addEventListener('DOMContentLoaded', function() {
  let quizData = {
      title: '',
      questions: []
  };

  document.getElementById('add-question').addEventListener('click', function() {
      const questionsContainer = document.getElementById('questions-container');
      const questionIndex = quizData.questions.length;

      const questionHTML = `
          <div class="question-container" id="question-container-${questionIndex}">
              <div class="form-group mb-3">
                  <label>Question ${questionIndex + 1}</label>
                  <input type="text" class="form-control" id="question-${questionIndex}">
              </div>
              ${[1, 2, 3, 4].map(option => `
                  <div class="form-group mb-3">
                      <label>Option ${option}:</label>
                      <input type="text" class="form-control" id="option${option}-${questionIndex}">
                  </div>
              `).join('')}
              <div class="form-group mb-3">
                  <label>Correct Option#:</label>
                  <select class="form-control" id="correct-option-${questionIndex}">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                  </select>
              </div>
          </div>
      `;
      const questionDiv = document.createElement('div');
      questionDiv.innerHTML = questionHTML;
      questionsContainer.appendChild(questionDiv);
  });

  document.getElementById('submit-quiz').addEventListener('click', function() {
      const quizName = document.getElementById('quiz-name').value;
      if (!quizName) {
          alert('Please enter a quiz name.');
          return;
      }
      quizData.title = quizName;

      const questionContainers = document.querySelectorAll('.question-container');
      questionContainers.forEach((container, index) => {
          const question = document.getElementById(`question-${index}`).value;
          const options = [1, 2, 3, 4].map(option => document.getElementById(`option${option}-${index}`).value);
          const correctOption = parseInt(document.getElementById(`correct-option-${index}`).value);

          quizData.questions.push({
              question: question,
              options: options,
              answer: correctOption
          });
      });

      let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
      quizzes.push(quizData);
      localStorage.setItem('quizzes', JSON.stringify(quizzes));
      window.location.href = 'Home.html';
  });
});
