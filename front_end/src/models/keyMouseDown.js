


const startKeyListener = function (game){
  document.onmousedown = keyPress;



  function react(gameIn, key, keyID){
    document.querySelector(keyID).classList.add('pressed');
    if  (gameIn.nextletter !== key){
      document.querySelector(keyID).classList.add('wrong-key');
    }
    if  (gameIn.nextletter === key){
      document.querySelector(keyID).classList.add('correct-key');
    }
    gameIn.run(key)
  }

  function changeCSS(keyID){
  document.querySelector(keyID).classList.remove('pressed');
  document.querySelector(keyID).classList.remove('wrong-key');
  document.querySelector(keyID).classList.remove('correct-key');

  }

  function keyPress(e){
    console.log((e.target.id));
    if(e.target.id == 'key_0'){
      react(game, '0', '#key_0');
      setTimeout(function () {
        changeCSS('#key_0')
      }, 300);

    }
    if(e.target.id == 'key_1'){ // 1
      react(game, '1', '#key_1');
      setTimeout(function () {
        changeCSS('#key_1')
      }, 300);
    }
    if(e.target.id == 'key_2'){ // 2
      react(game, '2', '#key_2');
      setTimeout(function () {
        changeCSS('#key_2')
      }, 300);

    }
    if(e.target.id == 'key_3'){ // 3
      react(game, '3', '#key_3');
      setTimeout(function () {
        changeCSS('#key_3')
      }, 300);
    }
    if(e.target.id == 'key_4'){ // 4
      react(game, '4', '#key_4');
      setTimeout(function () {
        changeCSS('#key_4')
      }, 300);

    }
    if(e.target.id == 'key_5'){ // 5
      react(game, '5', '#key_5');
      setTimeout(function () {
        changeCSS('#key_5')
      }, 300);

    }
    if(e.target.id == 'key_6'){ // 6
      react(game, '6', '#key_6');
      setTimeout(function () {
        changeCSS('#key_6')
      }, 300);

    }
    if(e.target.id == 'key_7'){ // 7
      react(game, '7', '#key_7');
      setTimeout(function () {
        changeCSS('#key_7')
      }, 300);

    }
    if(e.target.id == 'key_8'){ // 8
      react(game, '8', '#key_8');
      setTimeout(function () {
        changeCSS('#key_8')
      }, 300);

    }
    if(e.target.id == 'key_9'){ // 9
      react(game, '9', '#key_9');
      setTimeout(function () {
        changeCSS('#key_9')
      }, 300);

    }
    if(e.target.id == 'key_A'){ // a
      react(game, 'a', '#key_A');
      setTimeout(function () {
        changeCSS('#key_A')
      }, 300);

    }
    if(e.target.id == 'key_B'){ // b
      react(game, 'b', '#key_B');
      setTimeout(function () {
        changeCSS('#key_B')
      }, 300);

    }
    if(e.target.id == 'key_C'){ // c
      react(game, 'c', '#key_C');
      setTimeout(function () {
        changeCSS('#key_C')
      }, 300);

    }
    if(e.target.id == 'key_D'){ // d
      react(game, 'd', '#key_D');
      setTimeout(function () {
        changeCSS('#key_D')
      }, 300);

    }
    if(e.target.id == 'key_E'){ // e
      react(game, 'e', '#key_E');
      setTimeout(function () {
        changeCSS('#key_E')
      }, 300);

    }
    if(e.target.id == 'key_F'){ // f
      react(game, 'f', '#key_F');
      setTimeout(function () {
        changeCSS('#key_F')
      }, 300);

    }
    if(e.target.id == 'key_G'){ // g
      react(game, 'g', '#key_G');
      setTimeout(function () {
        changeCSS('#key_G')
      }, 300);

    }
    if(e.target.id == 'key_H'){ // h
      react(game, 'h', '#key_H');
      setTimeout(function () {
        changeCSS('#key_H')
      }, 300);

    }
    if(e.target.id == 'key_I'){ // i
      react(game, 'i', '#key_I');
      setTimeout(function () {
        changeCSS('#key_I')
      }, 300);

    }
    if(e.target.id == 'key_J'){ // j
      react(game, 'j', '#key_J');
      setTimeout(function () {
        changeCSS('#key_J')
      }, 300);

    }
    if(e.target.id == 'key_K'){ // k
      react(game, 'k', '#key_K');
      setTimeout(function () {
        changeCSS('#key_K')
      }, 300);

    }
    if(e.target.id == 'key_L'){ // l
      react(game, 'l', '#key_L');
      setTimeout(function () {
        changeCSS('#key_L')
      }, 300);

    }
    if(e.target.id == 'key_M'){ // m
      react(game, 'm', '#key_M');
      setTimeout(function () {
        changeCSS('#key_M')
      }, 300);

    }
    if(e.target.id == 'key_N'){ // n
      react(game, 'n', '#key_N');
      setTimeout(function () {
        changeCSS('#key_N')
      }, 300);

    }
    if(e.target.id == 'key_O'){ // o
      react(game, 'o', '#key_O');
      setTimeout(function () {
        changeCSS('#key_O')
      }, 300);

    }
    if(e.target.id == 'key_P'){ // p
      react(game, 'p', '#key_P');
      setTimeout(function () {
        changeCSS('#key_P')
      }, 300);

    }
    if(e.target.id == 'key_Q'){ // q
      react(game, 'q', '#key_Q');
      setTimeout(function () {
        changeCSS('#key_Q')
      }, 300);

    }
    if(e.target.id == 'key_R'){ // r
      react(game, 'r', '#key_R');
      setTimeout(function () {
        changeCSS('#key_R')
      }, 300);

    }
    if(e.target.id == 'key_S'){ // s
      react(game, 's', '#key_S');
      setTimeout(function () {
        changeCSS('#key_S')
      }, 300);

    }
    if(e.target.id == 'key_T'){ // t
      react(game, 't', '#key_T');
      setTimeout(function () {
        changeCSS('#key_T')
      }, 300);

    }
    if(e.target.id == 'key_U'){ // u
      react(game, 'u', '#key_U');
      setTimeout(function () {
        changeCSS('#key_U')
      }, 300);

    }
    if(e.target.id == 'key_V'){ // v
      react(game, 'v', '#key_V');
      setTimeout(function () {
        changeCSS('#key_V')
      }, 300);

    }
    if(e.target.id == 'key_W'){ // w
      react(game, 'w', '#key_W');
      setTimeout(function () {
        changeCSS('#key_W')
      }, 300);

    }
    if(e.target.id == 'key_X'){ // x
      react(game, 'x', '#key_X');
      setTimeout(function () {
        changeCSS('#key_X')
      }, 300);

    }
    if(e.target.id == 'key_Y'){ // y
      react(game, 'y', '#key_Y');
      setTimeout(function () {
        changeCSS('#key_Y')
      }, 300);

    }
    if(e.target.id == 'key_Z'){ // z
      react(game, 'z', '#key_Z');
      setTimeout(function () {
        changeCSS('#key_Z')
      }, 300);

    }
    if(e.target.id == 'space'){ // space
      react(game, '-', '#space');
      setTimeout(function () {
        changeCSS('#space')
      }, 300);
    }
    if(e.target.id == 'enter'){ // enter
      react(game, '-', '#enter');
      setTimeout(function () {
        changeCSS('#enter')
      }, 300);
    }
    if(e.target.id == 'key_left'){ // left
      react(game, '-', '#key_left');
      setTimeout(function () {
        changeCSS('#key_left')
      }, 300);
    }
    if(e.target.id == 'key_up'){ // up
      react(game, '-', '#key_up');
      setTimeout(function () {
        changeCSS('#key_up')
      }, 300);
    }
    if(e.target.id == 'key_right'){ // right
      react(game, '-', '#key_right');
      setTimeout(function () {
        changeCSS('#key_right')
      }, 300);
    }
    if(e.target.id == 'key_down'){ // down
      react(game, '-', '#key_down');
      setTimeout(function () {
        changeCSS('#key_down')
      }, 300);
    }

  };
};
module.exports = startKeyListener;
