const startKeyListener = function (game){
  document.onkeydown = keyPress;

  function react(gameIn, key, keyID){
    document.querySelector(keyID).classList.add('pressed');
    if  (gameIn.nextletter !== key){
      document.querySelector(keyID).classList.add('wrong-key');
    }
    if  (gameIn.nextletter === key){
      document.querySelector(keyID).classList.add('correct-key');
    }
    gameIn.run(key)
  };

  function changeCSS(keyID){
    document.querySelector(keyID).classList.add('pressed');
    document.querySelector(keyID).classList.add('wrong-key');
  };

  function keyPress(e){
    if(e.keyCode == 48){
      react(game, e.key, '#key_0');
      console.log (game.keyboard.pressedKeys);
    }
    if(e.keyCode == 49){ // 1
      react(game, e.key, '#key_1');
    }
    if(e.keyCode == 50){ // 2
      react(game, e.key, '#key_2');

    }
    if(e.keyCode == 51){ // 3
      react(game, e.key, '#key_3');
    }
    if(e.keyCode == 52){ // 4
      react(game, e.key, '#key_4');

    }
    if(e.keyCode == 53){ // 5
      react(game, e.key, '#key_5');

    }
    if(e.keyCode == 54){ // 6
      react(game, e.key, '#key_6');

    }
    if(e.keyCode == 55){ // 7
      react(game, e.key, '#key_7');

    }
    if(e.keyCode == 56){ // 8
      react(game, e.key, '#key_8');

    }
    if(e.keyCode == 57){ // 9
      react(game, e.key, '#key_9');

    }
    if(e.keyCode == 65){ // a
      react(game, e.key, '#key_A');

    }
    if(e.keyCode == 66){ // b
      react(game, e.key, '#key_B');

    }
    if(e.keyCode == 67){ // c
      react(game, e.key, '#key_C');

    }
    if(e.keyCode == 68){ // d
      react(game, e.key, '#key_D');

    }
    if(e.keyCode == 69){ // e
      react(game, e.key, '#key_E');

    }
    if(e.keyCode == 70){ // f
      react(game, e.key, '#key_F');

    }
    if(e.keyCode == 71){ // g
      react(game, e.key, '#key_G');

    }
    if(e.keyCode == 72){ // h
      react(game, e.key, '#key_H');

    }
    if(e.keyCode == 73){ // i
      react(game, e.key, '#key_I');

    }
    if(e.keyCode == 74){ // j
      react(game, e.key, '#key_J');

    }
    if(e.keyCode == 75){ // k
      react(game, e.key, '#key_K');

    }
    if(e.keyCode == 76){ // l
      react(game, e.key, '#key_L');

    }
    if(e.keyCode == 77){ // m
      react(game, e.key, '#key_M');

    }
    if(e.keyCode == 78){ // n
      react(game, e.key, '#key_N');

    }
    if(e.keyCode == 79){ // o
      react(game, e.key, '#key_O');

    }
    if(e.keyCode == 80){ // p
      react(game, e.key, '#key_P');

    }
    if(e.keyCode == 81){ // q
      react(game, e.key, '#key_Q');

    }
    if(e.keyCode == 82){ // r
      react(game, e.key, '#key_R');

    }
    if(e.keyCode == 83){ // s
      react(game, e.key, '#key_S');

    }
    if(e.keyCode == 84){ // t
      react(game, e.key, '#key_T');

    }
    if(e.keyCode == 85){ // u
      react(game, e.key, '#key_U');

    }
    if(e.keyCode == 86){ // v
      react(game, e.key, '#key_V');

    }
    if(e.keyCode == 87){ // w
      react(game, e.key, '#key_W');

    }
    if(e.keyCode == 88){ // x
      react(game, e.key, '#key_X');

    }
    if(e.keyCode == 89){ // y
      react(game, e.key, '#key_Y');

    }
    if(e.keyCode == 90){ // z
      react(game, e.key, '#key_Z');

    }
    if(e.keyCode == 32){ // z
      changeCSS('#space');
    }
    if(e.keyCode == 13){ // z
      changeCSS('#enter');
    }
    if(e.keyCode == 37){ // z
      changeCSS('#key_left');
    }
    if(e.keyCode == 38){ // z
      changeCSS('#key_up');
    }
    if(e.keyCode == 39){ // z
      changeCSS('#key_right');
    }
    if(e.keyCode == 40){ // z
      changeCSS('#key_down');
    }

  };
};
module.exports = startKeyListener;
