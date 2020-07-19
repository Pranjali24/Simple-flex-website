function Questions(question,options,answer){
  this.question=question;
  this.options=options;
  this.answer=answer;
}

var q1 = new Questions("Which of the following is correct about features of JavaScript?", 
  ["JavaScript is a lightweight, interpreted programming language.",
   "JavaScript is designed for creating network-centric applications.",
   "JavaScript is complementary to and integrated with Java.", 
   "All of the above."],
      "All of the above.");
var q2 = new Questions("How can you get the type of arguments passed to a function?", 
  ["using typeof operator", "using getType function", "Both of the above.","None of the above."], 
          "using typeof operator");

var q3 = new Questions("Which built-in method returns the calling string value converted to lower case?",
  ["toLowerCase()", "toLower()", "changeCase(case).", "None of the above."],
  "toLowerCase()");

var questionArray=[q1,q2,q3];

/**************** Render on WebPage ************* */
// display questions
function displayQuestion() {
  return questionArray.map((que,index) => {
    return `<ul class="test__question">${index+1}. ${que.question}
           ${displayOptions(que).join('')}
    <button class="btn" data-id=${index}>Check Answer</button>
    <li class="test__option"><p class="test__answer" data-show=${index}>
      <span class="answer">Answer : </span> ${que.answer}</p>
    </li> </ul>`;
  });
}


// display options 
function displayOptions(que) {
  return que.options.map(option => {
    return `<li class="test__option"><input type="radio" name="option"> ${option}</li>`;
  });
}

// Display on page question and answer
const test_content=document.querySelector('.test__content');
test_content.insertAdjacentHTML('afterbegin', `${displayQuestion().join('')}`);


/*********Checking Section*******/
// Show Anser on button click
const buttons=document.querySelectorAll('.btn');
const getAnswer = document.querySelectorAll('.test__answer');
buttons.forEach(button=>button.addEventListener('click',matchAnswer));

function matchAnswer(){
  const buttonId = this.dataset.id;
  let answerId;

  getAnswer.forEach(answer=>{
    answerId = answer.getAttribute('data-show');
    if(buttonId===answerId){
        showAnswer(answer);
        setTimeout(() => {
          hideAnswer(answer)
        }, 10000);
    }
  });

  function showAnswer(answer){
    answer.style.display = 'block'
 }
 function hideAnswer(answer)  {
   answer.style.display='none';
 }
}

