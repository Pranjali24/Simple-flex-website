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
  "using typeof operator");

var questionArray=[q1,q2,q3];

/**************** Render on WebPage ************* */
// display questions
function displayQuestion() {
  return questionArray.map((que,index) => {
    return `<ul class="test__question">${index+1}. ${que.question}
           ${displayOptions(que).join('')}
    <button class="btn">Check Answer</button>
    <li class="test__option"><p class="test__answer">
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

const buttons=document.querySelectorAll('.btn');
buttons.forEach(button=>button.addEventListener('click',displayAnswer));
function displayAnswer(){
  console.log(this);
  document.querySelector('.test__answer').style.display='block';
}


const question=document.querySelectorAll('.test__question');
const options = document.querySelectorAll('.test__option');
options.forEach(option=>option.addEventListener('click',handleClick));
console.log(question);
function handleClick(){
  console.log(this);
}

