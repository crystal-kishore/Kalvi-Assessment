
let questions = [
  {
    id: 1,
    question: "Find the number of zeroes in 10 x 20 x 30 x...x 1000",
    answer: "124",
    options: [
      "135",
      "120",
      "124",
      "115"
    ]
  },
  {
    id: 2,
    question: "A sells an article to B at a profit of 10% B sells the article back to A at loss of 10%. In this transaction ",
    answer: "A makes profit of 11%",
    options: [
      "A makes profit of 20%",
      "A makes profit of 11%",
      "A neither losses nor gain",
      "B losses 20%"
    ]
  },
  {
    id: 3,
    question: "The reflex angle between the hans of a clock at 10.25 is:",
    answer: "197 Degree",
    options: [
      "192 Degree",
      "180 Degree",
      "178 Degree",
      "197 Degree"
    ]
  },
  {
    id: 4,
    question: "The greatest number of four digits which is divisible by 15,25,40,75 is:",
    answer: "9600",
    options: [
      "9600",
      "9400",
      "9800",
      "9500"
    ]
  },
  {
    id: 5,
    question: "If log 27 = 1.431, then the value of log 9 is:",
    answer: "0.954",
    options: [
      "0.932",
      "0.954",
      "0.950",
      "0.962"
    ]
  },
  {
    id: 6,
    question: "If a*b = 2a - 3b + ab, then 3 * 5 + 5 *3 is equal to ?",
    answer: "22",
    options: [
      "24",
      "23",
      "27",
      "22"
    ]
  },
  {
    id: 7,
    question: "What is the probability of getting a sum 9 from two throws a dice ?",
    answer: "1/9",
    options: [
      "1/9",
      "1/6",
      "1/12",
      "1/8"
    ]
  },
  {
    id: 8,
    question: "The cube root of .000216 is :",
    answer: ".06",
    options: [
      ".06",
      "77",
      ".05",
      "87"
    ]
  },
  {
    id: 9,
    question: "Root of 1.5625 ?",
    answer: "1.25",
    options: [
      "1.45",
      "1.75",
      "1.55",
      "1.25"
    ]
  },
  {
    id: 10,
    question: "What decimal of an hout is a second ?",
    answer: "0.00027",
    options: [
      "0.00027",
      "0.00025",
      "0.22554",
      "0.02567"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
