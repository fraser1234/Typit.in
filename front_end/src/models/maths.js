const Maths = function(gamedata, gameview){
  this.answer = "";
  this.nextletter = "";
  this.gamedata = gamedata;
  this.gameview = gameview;
  this.problemsToPlay = [];
  this.roundCount = 0;
}

Maths.prototype.setProblem = function(problemIn){
  this.nextletter = problemIn.solution;
}
Maths.prototype.shuffle = function(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

Maths.prototype.getMathsToPlay = function(category){
  this.roundCount = 0;
  var playArray = [];
  if (category){
    for (problem of this.gamedata){
      if (category == problem.category){
        playArray.push(problem)
      }
    }
    this.problemsToPlay = this.shuffle(playArray);
  }
  else{
    this.problemsToPlay = this.gamedata;
  }
};

Maths.prototype.prepareRound = function(index){
  var totalRound = this.problemsToPlay.length;
  for (var i = 0; i < totalRound; i++) {
    if (index === i){
      this.solution = this.problemsToPlay[i].solution;
      this.setProblem(this.problemsToPlay[i]);
      this.gameview.render(this.problemsToPlay[i], this.roundCount, totalRound);
    }
    if (index >= this.problemsToPlay.length){
      this.gameview.clearRound();
      this.gameview.winScreen();
    }
  }
};

Maths.prototype.winCheck = function (key) {
  console.log("solution", this.solution);
  if(this.solution === key){

    this.gameview.updateAnswer();
    this.roundCount += 1;
    var timethis = this;
    setTimeout(function () {
      timethis.gameview.clearRound();
    }, 1000);
    setTimeout(function () {
      timethis.prepareRound(timethis.roundCount);
    }, 1060);
  }
};

Maths.prototype.run = function(key){
  console.log(this.nextletter);
  this.winCheck(key);
};

module.exports = Maths;
