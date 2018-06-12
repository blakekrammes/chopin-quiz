'use strict';

let questionNumber = 0;

const numberName = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
const scoreNums =  ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

// when the 'begin' button is clicked to start the quiz
function startQuiz() {
  $('.start-button').on('click', function (event) {
    if (questionNumber < data.length) {
    createQuestion();
  }
  $('.questionNumber').text(numberName[questionNumber]);
  })
}

// when the 'begin' button is clicked to start the quiz
function createQuestion() {
    if (questionNumber < data.length) {
    $('.main-container').html(`<div class="container">
    <p>Question <span class="questionNumber"></span> of Six</p>
    <h2>${data[questionNumber].question}</h2>
    <form class="quiz-question-form">
    <fieldset name="quiz-answers">
    <ul>
		<li class="input-li">
    <label for="no1" class="answer-option">${data[questionNumber].answers[0]}</label>
		<input id="no1" type="radio" value="${data[questionNumber].answers[0]}" name="answer" required>
    </li>
    <li class="input-li">
		<label for="no2" class="answer-option">${data[questionNumber].answers[1]}</label>
		<input id="no2" type="radio" value="${data[questionNumber].answers[1]}" name="answer" required>
    </li>
    <li class="input-li">
		<label for="no3" class="answer-option">${data[questionNumber].answers[2]}</label>
		<input id="no3" type="radio" value="${data[questionNumber].answers[2]}" name="answer" required>
    </li>
    <li class="input-li">
		<label for="no4" class="answer-option">${data[questionNumber].answers[3]}</label>
		<input id="no4" type="radio" value="${data[questionNumber].answers[3]}" name="answer" required>
    </li>
    </ul>
		<button class="button submit-button" type="submit">Submit</button>
    </fieldset>
    </form></div>`); 
    $('.questionNumber').text(numberName[questionNumber]);
    showPortraits();
  }
  else {
    displayResults();
  }
}

// display portraits for 3rd question
function showPortraits() {
  if (questionNumber===2) {
    $('fieldset').append(`
    <div class="portraits-container">
    <ul class="portrait-ul">
    <li>
    <div class="img-container"><p>One</p><img class="portraits" src="resources/portrait1.jpg" alt="portrait1">
    </div>
    </li>
    <li>
    <div class="img-container"><p>Two</p><img class="portraits" src="resources/portrait2.jpg" alt="portrait2">
    </div>
    </li>
    <li>
    <div class="img-container"><p>Three</p><img class="portraits" src="resources/portrait3.jpg" alt="portrait3">
    </div>
    </li>
    <li>
    <div class="img-container"><p id="p4">Four</p><img class="portraits" src="resources/portrait4.jpg" alt="portrait4">
    </div>
    </li>
    </ul>
    </div>`);
  }
}

//increase the question number
function increaseQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(numberName[questionNumber]);
}

// increase the number of correctly answered questions
let scoreNumsI = -1;
function increaseScore() {
  scoreNums[scoreNumsI++];
}

// to process the form submission of an answer
function submitQuizAnswer() {
  $('.main-container').on('submit', 'form', function(event) {
    event.preventDefault();
    let selectedAnswer = $('input:checked');
		let selectedAnswerValue = selectedAnswer.val();
    let correctAnswer = `${data[questionNumber].correctAnswer}`;
    if (selectedAnswerValue === correctAnswer && questionNumber < data.length - 1) {
      correctQuizAnswer();
    }
    else if (questionNumber === 5) {
      displayResults();
    }
    else {
      incorrectQuizAnswer();
    }
  })
}

// display this window if answer is correct 
function correctQuizAnswer() {
  let correctQuizAnswer = `${data[questionNumber].correctAnswer}`;
  $('.main-container').html(`<div><p>You Answered Correctly!</p><button class="next-button" type="button">Next Question</button></div>`);
  increaseScore();
}

// display this window if answer is incorrect
function incorrectQuizAnswer() {
  let correctQuizAnswer = `${data[questionNumber].correctAnswer}`;
  $('.main-container').html(`</div><p>You Answered Incorrectly!<br>The Correct Answer is <span>${correctQuizAnswer}</span></p><button type=button class="next-button">Next Question</button></div>`);
}

// render the background img for the correct answer
function changeBackground() { 
  $('.main-container').on('submit', function(event) {
    if (questionNumber===0) {
      $('html').css('background', 'url(http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1495658961/old-town-warsaw-poland-sqaure-WARSAW0517.jpg?itok=ynYJXiat) no-repeat center center fixed');
    }
    else if (questionNumber===1) {
      $('html').css({'background': 'url(http://bilder.wiesnkini.de/imagesresized/pages/das-erste-oktoberfest-peter-hess-pferderennen_1920.jpg) no-repeat center center fixed', 'background-size': 'cover'});
    }
    else if (questionNumber===2) {
      $('html').css({'background': 'url(https://cdn.austria.info/media/17083/thumbnails/franz-liszt-portraet-zeichnung-oesterreich-werbung-Trumler.jpg.3485822.jpg) no-repeat center center fixed', 'background-size': 'cover'});
    }
    else if (questionNumber===3) {
      $('html').css({'background': 'url(http://www.antiquemapsandprints.com/ekmps/shops/richben90/images/paris-rue-de-rivoli-minist-re-des-finances-antique-print-1835-154889-p.jpg) no-repeat center center fixed', 'background-size': 'cover'});
      $('p').css({'color': 'black'});
    }
    else if (questionNumber===4) {
      $('html').css({'background': 'url(https://img.culturacolectiva.com/content/2017/06/terror-and-ecstasy1.jpg) no-repeat center center fixed', 'background-size': 'cover'});
    }
    else if (questionNumber===4) {
      $('html').css({'background': 'url(http://cdn3.classical-music.com/sites/default/files/imagecache/250px_wide/images/John_field_Free_Hires_WIki.jpg) no-repeat center center fixed', 'background-size': 'cover'});
    }
  })
}

// change to orig background
function origBackground() {
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
  $('.main-container').on('click', '.next-button', function(event){
    origBackground();
    increaseQuestionNumber();
    createQuestion();
  })
  else if (questionNumber === data.length) {
    origBackground();
    displayResults();
  }
}

// display the score and result window of the quiz
function displayResults() {
  $('.main-container').html(`<div><p class="canYouSee">You Answered ${scoreNums[scoreNumsI]} out of Six Correctly</p><button class="restart-button" type="reset" value="reset">Try Again</button></div>`);
  restartQuiz();
}

// this will return the user to the quiz beginning
function restartQuiz() {
  $('.main-container').on('click', '.restart-button', function(event) {
    questionNumber = 0;
    scoreNumsI = -1;
    createQuestion();
  })
}

// to allow clicking outside of label for selection
function liClick() {
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
  liClick();
}

$(renderQuiz);


  