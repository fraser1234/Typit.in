
const startKeyUpListener = function(){

  document.onkeyup = keyRelease;

  function changeCSS(keyID){
  document.querySelector(keyID).classList.remove('pressed');
  document.querySelector(keyID).classList.remove('wrong-key');
  document.querySelector(keyID).classList.remove('correct-key');

  }

  function keyRelease(e){
    if(e.keyCode == 48){ // 0
      changeCSS('#key_0');
    }
    if(e.keyCode == 49){ // 1
      changeCSS('#key_1');
    }
    if(e.keyCode == 50){ // 2
      changeCSS('#key_2');
    }
    if(e.keyCode == 51){ // 3
      changeCSS('#key_3');
    }
    if(e.keyCode == 52){ // 4
      changeCSS('#key_4');
    }
    if(e.keyCode == 53){ // 5
      changeCSS('#key_5');
    }
    if(e.keyCode == 54){ // 6
      changeCSS('#key_6');
    }
    if(e.keyCode == 55){ // 7
      changeCSS('#key_7');
    }
    if(e.keyCode == 56){ // 8
      changeCSS('#key_8');
    }
    if(e.keyCode == 57){ // 9
      changeCSS('#key_9');
    }
    if(e.keyCode == 65){ // a
      changeCSS('#key_A');
    }
    if(e.keyCode == 66){ // b
      changeCSS('#key_B');
    }
    if(e.keyCode == 67){ // c
      changeCSS('#key_C');
    }
    if(e.keyCode == 68){ // d
      changeCSS('#key_D');
    }
    if(e.keyCode == 69){ // e
      changeCSS('#key_E');
    }
    if(e.keyCode == 70){ // f
      changeCSS('#key_F');
    }
    if(e.keyCode == 71){ // g
      changeCSS('#key_G');
    }
    if(e.keyCode == 72){ // h
      changeCSS('#key_H');
    }
    if(e.keyCode == 73){ // i
      changeCSS('#key_I');
    }
    if(e.keyCode == 74){ // j
      changeCSS('#key_J');
    }
    if(e.keyCode == 75){ // k
      changeCSS('#key_K');
    }
    if(e.keyCode == 76){ // l
      changeCSS('#key_L');
    }
    if(e.keyCode == 77){ // m
      changeCSS('#key_M');
    }
    if(e.keyCode == 78){ // n
      changeCSS('#key_N');
    }
    if(e.keyCode == 79){ // o
      changeCSS('#key_O');
    }
    if(e.keyCode == 80){ // p
      changeCSS('#key_P');
    }
    if(e.keyCode == 81){ // q
      changeCSS('#key_Q');
    }
    if(e.keyCode == 82){ // r
      changeCSS('#key_R');
    }
    if(e.keyCode == 83){ // s
      changeCSS('#key_S');
    }
    if(e.keyCode == 84){ // t
      changeCSS('#key_T');
    }
    if(e.keyCode == 85){ // u
      changeCSS('#key_U');
    }
    if(e.keyCode == 86){ // v
      changeCSS('#key_V');
    }
    if(e.keyCode == 87){ // w
      changeCSS('#key_W');
    }
    if(e.keyCode == 88){ // x
      changeCSS('#key_X');
    }
    if(e.keyCode == 89){ // y
      changeCSS('#key_Y');
    }
    if(e.keyCode == 90){ // z
      changeCSS('#key_Z');
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
module.exports = startKeyUpListener;
