const MathsView = function(container){
  this.container = container;
}

MathsView.prototype.clearRound = function(){
  this.container.innerHTML = "";
}

MathsView.prototype.winScreen = function (){
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

MathsView.prototype.updateAnswer = function () {
  var answer = document.querySelector('#game-image4');
  answer.classList.remove('hide');
};




MathsView.prototype.render = function(data, roundCount, totalRounds){
  var image1 = document.createElement('img');
  image1.id = "game-image1";
  image1.src = data.image1;
  image1.style.cssText = "width: 110px;height: 110px; margin: 110px 0px 0px 0px";

  var image2 = document.createElement('img');
  image2.id = "game-image2";
  image2.src = data.image2;
  image2.style.cssText = "width: 70px;height: 70px; margin: 110px 30px 20px 30px;";

  var image3 = document.createElement('img');
  image3.id = "game-image3";
  image3.src = data.image3;
  image3.style.cssText = "width: 110px;height: 110px; margin: 110px 0px 0px 0px";

  var equals = document.createElement('img');
  equals.id = "equals";
  equals.src = "/images/maths/equal.svg";
  equals.style.cssText = "width: 70px;height: 70px; margin:110px 30px 20px 30px;";

  var image4 = document.createElement('img');
  image4.id = "game-image4";
  image4.src = data.image4;
  image4.style.cssText = "width: 110px;height: 110px;margin: 110px 0px 0px 0px;";
  image4.classList.add('hide');

  var counter = document.createElement('p');
  counter.id = "counter-display";
  counter.innerText = `${(roundCount + 1)} of  ${totalRounds}`;
  counter.style.cssText = "margin-top: 95px;";


  this.container.appendChild(image1);
  this.container.appendChild(image2);
  this.container.appendChild(image3);
  this.container.appendChild(equals);
  this.container.appendChild(image4);
  this.container.appendChild(counter);
}

module.exports = MathsView;
