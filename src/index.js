'use strict';

const numberName = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
const scoreNums =  ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six'];
const incorrectScoreNums = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six'];

let questionNumber = 0;
let scoreNumsI = 0;
let incorrectScoreNumsI = 0;

// intializes the quiz after the 'begin' button is clicked
function startQuiz() {
  $('.start-button').on('click', function () {
    if (questionNumber < data.length) {
    createQuestion();
  }
  $('.questionNumber').text(numberName[questionNumber]);
  })
}

// creates the form with the multiple choice quiz question
function createQuestion() {
    if (questionNumber < data.length) {
    $('.main-container').html(`<div class="container">
    <p class="question-text">Question <span class="questionNumber"></span> of Six</p>
    <form class="quiz-question-form">
    <fieldset name="quiz-answers">
    <legend>${data[questionNumber].question}</legend>
    <ul>
    <li class="input-li">
    <label for="opt1" class="answer-option">${data[questionNumber].answers[0]}</label>
    <input id="opt1" type="radio" value="${data[questionNumber].answers[0]}" name="answer" required>
    </li>
    <li class="input-li">
    <label for="opt2" class="answer-option">${data[questionNumber].answers[1]}</label>
    <input id="no2" type="radio" value="${data[questionNumber].answers[1]}" name="answer" required>
    </li>
    <li class="input-li">
    <label for="opt3" class="answer-option">${data[questionNumber].answers[2]}</label>
    <input id="opt3" type="radio" value="${data[questionNumber].answers[2]}" name="answer" required>
    </li>
    <li class="input-li">
    <label for="opt4" class="answer-option">${data[questionNumber].answers[3]}</label>
    <input id="opt4" type="radio" value="${data[questionNumber].answers[3]}" name="answer" required>
    </li>
    </ul>
    <button class="button submit-button" type="submit">Submit</button>
    </fieldset>
    </form>
    <h2 id="scores"><span id="correctScore">Correct: ${scoreNums[scoreNumsI]}</span><span id="incorrectScore">Incorrect: ${incorrectScoreNums[incorrectScoreNumsI]}</span></h2>
    </div>`); 
    $('.questionNumber').text(numberName[questionNumber]);
    showPortraits();
  }
  else {
    displayResults();
  }
}

// display portrait thumbnails for 3rd question
function showPortraits() {
  if (questionNumber === 2) {
    $('fieldset').append(`
    <div class="portraits-container">
    <ul class="portrait-ul">
    <li><div class="img-container"><p>One</p><img class="portraits" src="../resources/portrait1.jpg" alt="portrait1"></div>
    </li>
    <li><div class="img-container"><p>Two</p><img class="portraits" src="../resources/portrait2.jpg" alt="portrait2"></div>
    </li>
    <li>
    <div class="img-container"><p>Three</p><img class="portraits" src="../resources/portrait3.jpg" alt="portrait3"></div>
    </li>
    <li><div class="img-container"><p id="p4">Four</p><img class="portraits" src="../resources/portrait4.jpg" alt="portrait4"></div>
    </li>
    </ul>
    </div>`);
  }
}

// increase the question number
function increaseQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(numberName[questionNumber]);
}

// to process the form submission of an answer
function submitQuizAnswer() {
  $('.main-container').on('submit', 'form', function() {
    event.preventDefault();
    let selectedAnswer = $('input:checked');
    let selectedAnswerValue = selectedAnswer.val();
    let correctAnswer = `${data[questionNumber].correctAnswer}`;
    if (selectedAnswerValue === correctAnswer && questionNumber < data.length - 1) {
      correctQuizAnswer();
    }
    else if (selectedAnswerValue === correctAnswer && questionNumber === 5) {
      correctQuizAnswer();
      displayResults();
    }
    else if (selectedAnswerValue !== correctAnswer && questionNumber === 5) {
      incorrectQuizAnswer();
      displayResults();
    }
    else {
      incorrectQuizAnswer();
    }
  })
}

// display this window if answer is correct 
function correctQuizAnswer() {
  if (questionNumber === 5) {
    $('html').prepend(`<div class="answerDiv"><p>You Answered Correctly!</p></div>`);
  }
  else {
    $('.main-container').html(`<div><p>You Answered Correctly!</p><button class="next-button" type="button">Next Question</button></div>`);
  }
  scoreNums[scoreNumsI++];
}

// display this window if answer is incorrect
function incorrectQuizAnswer() {
  let correctAnswer = `${data[questionNumber].correctAnswer}`;
  if (questionNumber === 5) {
    $('html').prepend(`<div class="answerDiv"><p id="final-incorrect">You Answered Incorrectly!<br>The Correct Answer is <span>${correctAnswer}</span></p></div>`);
  }
  else {
  $('.main-container').html(`<div><p>You Answered Incorrectly!<br>The Correct Answer is <span>${correctAnswer}</span></p><button type=button class="next-button">Next Question</button></div>`);
  }
  incorrectScoreNums[incorrectScoreNumsI++];
}

// render the background img for the answer
function changeBackground() { 
  $('.main-container').on('submit', function() {
    const backgrounds = ['http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1495658961/old-town-warsaw-poland-sqaure-WARSAW0517.jpg?itok=ynYJXiat', 
    'http://bilder.wiesnkini.de/imagesresized/pages/das-erste-oktoberfest-peter-hess-pferderennen_1920.jpg', 'https://www.cmuse.org/wp-content/uploads/2015/01/franz-liszt-and-his-women.jpg',
    'http://www.antiquemapsandprints.com/ekmps/shops/richben90/images/paris-rue-de-rivoli-minist-re-des-finances-antique-print-1835-154889-p.jpg', 'https://img.culturacolectiva.com/content/2017/06/terror-and-ecstasy1.jpg',
    'https://media.wnyc.org/i/800/0/c/85/1/maxresdefault_kmQ7K9g.jpg'];
     let newBackground = backgrounds[questionNumber];
    if (questionNumber === 2) {
      $('html').css({'background': 'url(' + newBackground + ')', 'background-repeat': 'no-repeat','background-position-y': 'center','background-position-x': '60%','background-attachment': 'fixed', 'background-size': 'cover'});
    }
    else {
      $('html').css({'background': 'url(' + newBackground + ') no-repeat center center fixed', 'background-size': 'cover'});
    }
    if (questionNumber === 3) {
      $('p').css({'color': 'black', 'font-weight': 'bolder', 'text-shadow': '2px 2px 15px rgb(255 255 240)'});
    }
    if (questionNumber === 5) {
      defaultBackground();
    }
  })
}

// change to default background
function defaultBackground() {
  if ($('p').css('text-align') == 'center') {
        $('html').css({'background': 'url(https://media.wnyc.org/i/800/0/c/85/1/maxresdefault_kmQ7K9g.jpg)', 'background-repeat': 'no-repeat','background-position-y': 'center','background-position-x': '40%','background-attachment': 'fixed', 'background-size': 'cover'});
  }
  else {
  $('html').css({'background': 'url(https://media.wnyc.org/i/800/0/c/85/1/maxresdefault_kmQ7K9g.jpg) no-repeat center center fixed', 'background-size': 'cover'});
  }
}

// proceed to next question
function nextQuestion() {
  if (questionNumber < data.length - 1)
  $('.main-container').on('click', '.next-button', function(){
    defaultBackground();
    increaseQuestionNumber();
    createQuestion();
  })
  else if (questionNumber === data.length) {
    displayResults();
  }
}

// display the score and result window of the quiz
function displayResults() {
  $('.main-container').html(`<div class="finalDiv"><p class="canYouSee">You Answered ${scoreNums[scoreNumsI]} out of Six Questions Correctly</p><button class="restart-button" type="reset" value="reset">Try Again</button></div>`);
  restartQuiz();
}

// this will return the user to the beginning of the quiz
function restartQuiz() {
  $('.main-container').on('click', '.restart-button', function() {
    questionNumber = 0;
    scoreNumsI = 0;
    incorrectScoreNumsI = 0;
    createQuestion();
    defaultBackground();
    $('.answerDiv').remove();
  })
}

// to allow clicking outside the label for answer selection
function clickLIToSelect() {
  $('.main-container').on('click', '.input-li', function() {
    $(this).find('input').prop('checked', true);
  }) 
}

// initialize functions for the app
function renderQuiz() {
  submitQuizAnswer();
  startQuiz();
  nextQuestion();
  changeBackground();
  clickLIToSelect();
}

$(renderQuiz);