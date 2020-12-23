var highScores = JSON.parse(localStorage.getItem('userScores'));

var showHighScores = document.querySelector("#scoresPage");
highScores.sort(sortingAlgorithm);
for (i = 0; i < highScores.length; i++){
  var user = document.createElement('li');
  user.innerHTML = highScores[i].initials + ': ' + highScores[i].score;
  showHighScores.append(user);
}

function sortingAlgorithm(a,b){
  return (a.score < b.score)? 1 : -1;
}