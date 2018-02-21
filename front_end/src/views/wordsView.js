const WordsView = function(container){
  this.container = container;
}

WordsView.prototype.createImage = function (data) {
var image = document.createElement('img');
image.id = "game-image";
image.src = data.image;
image.alt = data.name;
return image;
};

WordsView.prototype.winScreen = function (){
  var welltext = document.createElement('p');
  welltext.id = "win-text";
  welltext.innerText = "w e l l "
  var donetext = document.createElement('p');
  donetext.id = "win-text";
  donetext.innerText = " d o n e !"
  var image = document.createElement('img');
  image.id = 'win-image';
  image.src = '/images/trophy.svg'
  image.alt = 'trophy'
  image.style.cssText = "width: 120px;height: 120px;"
  this.container.appendChild(welltext);
  this.container.appendChild(image);
  this.container.appendChild(donetext);
}

WordsView.prototype.prepareWord = function(word){
  var wordIn = word;
  var newWord = '';
  var wordSplit = [];
  for (var i = 0; i < wordIn.length; i++) {
    wordSplit.push(wordIn.charAt(i))
    newWord += (wordSplit[i] + ' ');
  }
  return newWord;
}

WordsView.prototype.updateAnswer = function (newAnswer) {
  answerView = document.querySelector('#answer-display');
  answerView.innerText = this.prepareWord(newAnswer);
};

WordsView.prototype.clearRound = function(){
  this.container.innerHTML = "";
}

WordsView.prototype.render = function(data, answerIn, roundCount, totalRounds){
  var word = document.createElement('p');
  word.id = "display-word";

  var answer = document.createElement('p');
  answer.id = "answer-display";

  var counter = document.createElement('p');
  counter.id = "counter-display";
  counter.innerText = `${(roundCount + 1)} of  ${totalRounds}`

  var image = this.createImage (data);
  image.style.cssText = "width: 120px;height: 120px;"
  word.innerText = this.prepareWord(data.word);
  answer.innerText = this.prepareWord(answerIn);


  this.container.appendChild(word);
  this.container.appendChild(image);
  this.container.appendChild(answer);
  this.container.appendChild(counter);
}

module.exports = WordsView;
