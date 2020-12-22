// list of all questions, choices, and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];
  //Start Button
  document.getElementById('start').addEventListener('click', startQuiz);
// List Variable 
var list = document.querySelector('#choices');
//User Selection 
var userSelection = [];
//Question Number
var questionNumber = 0; 
//Number of Right Answers
var rightAnswers = 0; 
//Event Listeners 
function startQuiz(e){
  e.preventDefault();
  document.getElementById('questions').classList.remove('hide');
  document.getElementById('start').classList.add('hide');
  setQuestion(); 
}

function setQuestion(){
  document.querySelector('#question-title').innerHTML = questions[questionNumber].title

  if(questionNumber == 0){
   // Loop Through our ITEMS ARRAY and ADD each ITEM to the DOM
  for(var i = 0; i < questions[questionNumber].choices.length; i++) {
   // Create a NEW ELEMENT LIST
   var newItem = document.createElement('button');
   // Add ATTRIBUTES and CLASSES to NEW ELEMENT
   newItem.setAttribute("data", questions[questionNumber].choices[i]);
   newItem.setAttribute("id", i);
   newItem.classList.add("btn");
   newItem.classList.add('btn-primary'); 
   // Add CONTENT to NEW ELEMENT
   newItem.textContent = questions[questionNumber].choices[i];
   // Add NEW ELEMENT to DOM div
   list.appendChild(newItem);
}}else{
  for(var i = 0; i < questions[questionNumber].choices.length; i++) {
    var button = document.getElementById(i);
    // Add ATTRIBUTES and CLASSES to NEW ELEMENT
    button.setAttribute("data", questions[questionNumber].choices[i]);
    // Add CONTENT to NEW ELEMENT
    button.textContent = questions[questionNumber].choices[i];
}
  }
  
}
list.addEventListener('click', function(event){
  event.preventDefault();
  if (event.target.matches("button")) {
    // Let's Identify EACH LIST ITEM
    let identifier = event.target.id;
    console.log(identifier);
    let valueKey = event.target.innerHTML;
    console.log(valueKey);
    if(valueKey == questions[questionNumber].answer){
      rightAnswers++; 
    }
    userSelection.push( 
        {   
            // IF WE DONT PARSE the 'id' it will remain a STRING in our array!
            // index: identifier,
            
            // *** NOTE!! how we PARSE the STRING and our index is now an INTEGER!!
            index: parseInt(identifier),
            val: valueKey
        }
    );
    questionNumber++; 
    if(questionNumber == questions.length){ 
      checkUserSelection();
      document.querySelector("#questions").classList.add('hide');
      document.querySelector("#end-screen").classList.remove('hide'); 
      document.querySelector("#final-score").innerHTML = rightAnswers; 
      
    }else{
      setQuestion(); 
    }
   
}

});

document.querySelector("#Submit").addEventListener("click",function(){
  localStorage.setItem('correctAnswers', rightAnswers);
  localStorage.setItem('user',document.querySelector("#initals").value)
  window.location.href = "./highscores.html"; 
})
function checkUserSelection() {
console.log("User Array Contains:");
console.log(userSelection);
}