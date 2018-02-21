const Flags = function(gamedata, gameview, map){
  this.word = "";
  this.answer = "";
  this.nextletter = "";
  this.gamedata = gamedata;
  this.gameview = gameview;
  this.wordsToPlay = [];
  this.roundCount = 0;
  this.zoom = 5;
  this.coords = { lat: 56.890671, lng: -4.202646 };
  this.map = map;
}

Flags.prototype.setAnswerLength = function () {
  var newAnswer = "";
  for (var i = 0 ; i < this.word.length ; i++) {
    newAnswer += "_";
  }
  this.answer = newAnswer;
};



Flags.prototype.setWord = function(wordIn){
  console.log(wordIn);
  this.word = wordIn;
  this.nextletter = this.word.charAt(0);
}

Flags.prototype.setMap = function(object){
  this.coords = object.coords;
  this.zoom = object.zoom;
}

Flags.prototype.shuffle = function(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

Flags.prototype.getFlagsToPlay = function(category){
  this.roundCount = 0;
  var playArray = [];
  if (category){
    for (word of this.gamedata){
      if (category == word.category){
        playArray.push(word)
      }
    }
    this.wordsToPlay = this.shuffle(playArray);
  }
  else{
    var shuffleArray = this.shuffle(this.gamedata);
    for (var i = 0; i < 10; i++) {
    this.wordsToPlay.push(shuffleArray[i]);
  }
  }
};

Flags.prototype.fillAnswer = function (letter) {
  var newAnswerArray = [];
  for (var i = 0; i < this.answer.length; i++) {
    if (this.answer.charAt(i) !== '_'){
      newAnswerArray.push(this.answer.charAt(i));
    }
  }
  newAnswerArray.push(letter);
  var letterCount = newAnswerArray.length;
  this.nextletter = this.word.charAt(letterCount);
  for (var i = 0; i < (this.word.length - (letterCount)); i++) {
    newAnswerArray.push('_');
  }
  this.answer = newAnswerArray.join("");
};

Flags.prototype.checkLetter = function(letterIn){
  if (letterIn === this.nextletter){
    this.fillAnswer(letterIn);
  }
}

Flags.prototype.prepareRound = function(index){
  var numberofRounds = this.wordsToPlay.length;
  for (var i = 0; i < numberofRounds; i++) {
    if (index === i){
      this.setWord(this.wordsToPlay[i].name);
      this.setMap(this.wordsToPlay[i]);
      this.setAnswerLength();
      this.gameview.render(this.wordsToPlay[i], this.answer, this.roundCount, numberofRounds, this.map);
    }
    if (index >= this.wordsToPlay.length){

      this.gameview.winScreen();
    }
  }
};


Flags.prototype.winCheck = function () {
  if(this.word === this.answer){
    this.roundCount += 1;
    var timethis = this;
    setTimeout(function () {
      timethis.gameview.clearRound();
    }, 600);
    setTimeout(function () {
      timethis.prepareRound(timethis.roundCount);
    }, 660);
  }
};

Flags.prototype.run = function(letter){
  this.checkLetter(letter);
  this.gameview.updateAnswer(this.answer);
  return(this.winCheck());
};




module.exports = Flags;
