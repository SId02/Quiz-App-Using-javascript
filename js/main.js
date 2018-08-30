

(function() {
const Questions = [{
  question: "Which of the following property serves as shorthand for the padding properties?",
  answers: {
            a: "padding",
            b: "padding-top",
            c: "padding-left",
            d: "padding-right"
  },
  correctAnswer: "a"
},
    {
      question: "var declares a block-scoped variable",
      answers: {
          a: "True",
          b: "False "
      },
      correctAnswer: "b"
    },
    {
      question: "const declares a block-scoped variable",
      answers: {
      a: "True",
            b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "let declares a block-scoped variable",
      answers: {
         a: "True",
            b: "False"
      },
      correctAnswer: "a"
    },
  ];



  function generateQuiz() {

    const op = [];
    Questions.forEach(function (curQues, questionNo) {
      const answers = [];
      for (character in curQues.answers) {
        answers.push(
          `<label class="radio">
         <input type="radio" name="question${questionNo}" value="${character}">
          ${character} :
          ${curQues.answers[character]}
       </label>`
        );
      }

      op.push(
        `<div class="slide">
       <div class="question"> ${curQues.question} </div>
       <div class="answers"> ${answers.join("")} </div>
     </div>`
      );
    });


    quizDiv.innerHTML = op.join("");
  }
  function dispResults() {

    var answerContainers = quizDiv.querySelectorAll(".answers");
    let numCorrect = 0;
    Questions.forEach(function (curQues, questionNo) {

      const answerContainer = answerContainers[questionNo];
      const selector = `input[name=question${questionNo}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;


      if (userAnswer === curQues.correctAnswer) {
        numCorrect++;
        answerContainers[questionNo].style.color = "lightgreen";
      } else {
        answerContainers[questionNo].style.color = "red";
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${Questions.length}`;
  }
  function dispSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }
  function showNextSlide() {
    dispSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    dispSlide(currentSlide - 1);
  }

  const quizDiv = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


  generateQuiz();

  const previousButton = document.getElementById("prev");
  const nextButton = document.getElementById("nxt");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  dispSlide(0);


  submitButton.addEventListener("click", dispResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);






















})();





/* 





(function() {
const Questions = [{
  question: "What is the best site ever created?",
  answers: {
    a: "SitePoint",
    b: "Simple Steps Code",
    c: "Trick question; they're both the best"
  },
  correctAnswer: "c"
},
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];



  function createQuiz() {

    const op = [];
    Questions.forEach(function (curQues, questionNo) {
      const answers = [];
      for (character in curQues.answers) {
        answers.push(
          `<label class="radio">
         <input type="radio" name="question${questionNo}" value="${character}">
          ${character} :
          ${curQues.answers[character]}
       </label>`
        );
      }

      op.push(
        `<div class="slide">
       <div class="question"> ${curQues.question} </div>
       <div class="answers"> ${answers.join("")} </div>
     </div>`
      );
    });


    quizDiv.innerHTML = op.join("");
  }
  function showResults() {

    var answerContainers = quizDiv.querySelectorAll(".answers");
    let numCorrect = 0;
    Questions.forEach(function (curQues, questionNo) {

      const answerContainer = answerContainers[questionNo];
      const selector = `input[name=question${questionNo}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;


      if (userAnswer === curQues.correctAnswer) {
        numCorrect++;
        answerContainers[questionNo].style.color = "lightgreen";
      } else {
        answerContainers[questionNo].style.color = "red";
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${Questions.length}`;
  }
  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizDiv = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  createQuiz();

  const previousButton = document.getElementById("prev");
  const nextButton = document.getElementById("nxt");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);






















})();

























*/