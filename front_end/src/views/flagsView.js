const FlagsView = function(container){
  this.container = container;
}

FlagsView.prototype.createImage = function (data) {
var image = document.createElement('img');
image.id = "flag-image";
image.src = data.image;
image.alt = data.name;
return image;
};

FlagsView.prototype.winScreen = function (){
  this.container.innerHTML = '';
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

FlagsView.prototype.prepareWord = function(word){
  var wordIn = word;
  var newWord = '';
  var wordSplit = [];
  for (var i = 0; i < wordIn.length; i++) {
    wordSplit.push(wordIn.charAt(i))
    newWord += (wordSplit[i] + ' ');
  }
  return newWord;
}

FlagsView.prototype.updateAnswer = function (newAnswer) {
  answerView = document.querySelector('#flag-answer-display');
  answerView.innerText = this.prepareWord(newAnswer);
};

FlagsView.prototype.clearRound = function(){
  var titleAndFlag = document.querySelector('#title-and-flag')
  titleAndFlag.innerHTML ='';

  var answerAndCounter = document.querySelector('#answer-and-counter')
  answerAndCounter.innerHTML ='';
}

FlagsView.prototype.render = function(data, answerIn, roundCount, totalRounds, map){
  var word = document.createElement('p');
  word.id = "display-country";



  var answer = document.createElement('p');
  answer.id = "flag-answer-display";

  var counter = document.createElement('p');
  counter.id = "counter-display-flag";
  counter.innerText = `${(roundCount + 1)} of  ${totalRounds}`

  var image = this.createImage (data);
  // image.style.cssText = "width: 120px;height: 120px;"
  word.innerText = this.prepareWord(data.name);
  answer.innerText = this.prepareWord(answerIn);

  var titleAndFlag = document.querySelector('#title-and-flag')
  var answerAndCounter = document.querySelector('#answer-and-counter')

  titleAndFlag.appendChild(word);
  titleAndFlag.appendChild(image);
  answerAndCounter.appendChild(answer);
  answerAndCounter.appendChild(counter);


  map.googleMap.setCenter(data.coords);
  map.googleMap.setZoom(data.zoom);

}

module.exports = FlagsView;
