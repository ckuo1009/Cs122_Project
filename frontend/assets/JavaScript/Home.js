let quizzes = [
  {
      title: "Science Quiz",
      questions: [
          {
              question: "What is the chemical symbol for the element oxygen?",
              options: ["O", "Ox", "Om", "Oz"],
              answer: 1
          },
          {
              question: "What planet is known as the Red Planet?",
              options: ["Earth", "Mars", "Venus", "Mercury"],
              answer: 2
          },
          {
              question: "What is the hardest natural substance on Earth?",
              options: ["Gold", "Iron", "Diamond", "Quartz"],
              answer: 3
          }
      ]
  },
  {
      title: "Python Quiz",
      questions: [
          {
              question: "Which of these is not a core data type in Python?",
              options: ["Lists", "Dictionary", "Tuples", "Class"],
              answer: 4
          },
          {
              question: "What keyword is used to create a function in Python?",
              options: ["function", "def", "create", "func"],
              answer: 2
          },
          {
              question: "What does 'len()' function do in Python?",
              options: ["Prints the length of an object", "Returns the length of an object", "Deletes an item from a list", "None of the above"],
              answer: 2
          }
      ]
  },
  {
      title: "Math Quiz",
      questions: [
          {
              question: "What is the square root of 144?",
              options: ["12", "14", "16", "18"],
              answer: 1
          },
          {
              question: "What is 50 times 5?",
              options: ["250", "205", "505", "500"],
              answer: 1
          },
          {
              question: "What is 15% of 200?",
              options: ["30", "25", "20", "35"],
              answer: 1
          }
      ]
  }
];



document.addEventListener('DOMContentLoaded', function() {
  const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

  const quizList = document.getElementById('quiz-list');

  if (quizzes.length > 0) {
    quizzes.forEach((quiz, index) => {
        const quizItem = document.createElement('div');
        quizItem.className = 'application-item';
        quizItem.style.cssText = 'padding-right: 10px; margin-left: 300px; margin-right: 300px;';

        const quizTitle = document.createElement('span');
        quizTitle.className = 'job-title';
        quizTitle.textContent = quiz.title;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const takeButton = document.createElement('button');
        takeButton.className = 'button';
        takeButton.textContent = 'Take';
        takeButton.addEventListener('click', () => {
            localStorage.setItem('selectedQuiz', JSON.stringify(quizzes[index]));
            window.location.href = 'TakingQuiz.html';
        });

        actionsDiv.appendChild(takeButton);
        quizItem.appendChild(quizTitle);
        quizItem.appendChild(actionsDiv);
        quizList.appendChild(quizItem);
    });
  } else {
    const noQuizMessage = document.createElement('p');
    noQuizMessage.textContent = "No quizzes available. Please create a new quiz.";
    quizList.appendChild(noQuizMessage);
  }
});