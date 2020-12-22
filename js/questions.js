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
var userSelection = []
//Event Listeners 
function startQuiz(e){
  e.preventDefault();
  document.getElementById('questions').classList.remove('hide');
  document.getElementById('start').classList.add('hide');
  
  document.querySelector('#question-title').innerHTML = questions[0].title
   // Loop Through our ITEMS ARRAY and ADD each ITEM to the DOM
   for(var i = 0; i < questions[0].choices.length; i++) {
    // Create a NEW ELEMENT LIST
    var newItem = document.createElement('li');
    // Add ATTRIBUTES and CLASSES to NEW ELEMENT
    newItem.setAttribute("data", questions[0].choices[i]);
    newItem.setAttribute("id", i);
    newItem.classList.add("list-item");
    // Add CONTENT to NEW ELEMENT
    newItem.textContent = questions[0].choices[i];
    // Add NEW ELEMENT to DOM div
    list.appendChild(newItem);
}
list.addEventListener('click', function(event){
  event.preventDefault();
  if (event.target.matches("li")) {
    // Let's Identify EACH LIST ITEM
    let identifier = event.target.id;
    console.log(identifier);
​
    // 
    let valueKey = event.target.innerHTML;
    console.log(valueKey);
​
    userSelection.push( 
        {   
            // IF WE DONT PARSE the 'id' it will remain a STRING in our array!
            // index: identifier,
            
            // *** NOTE!! how we PARSE the STRING and our index is now an INTEGER!!
            index: parseInt(identifier),
            val: valueKey
        }
    );
}
checkUserSelection();
​
})
​
​
function checkUserSelection() {
console.log("User Array Contains:");
console.log(userSelection);
}

  

