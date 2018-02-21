


const startKeyListener = function (game){
  document.onmouseup = keyRelease;



  function changeCSS(keyID){
  document.querySelector(keyID).classList.remove('pressed');
  document.querySelector(keyID).classList.remove('wrong-key');
  document.querySelector(keyID).classList.remove('correct-key');

  }


  function keyRelease(e){
  changeCSS(`#${event.target.id}`);

  };
};
module.exports = startKeyListener;
