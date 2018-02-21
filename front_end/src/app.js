const keyPress = require ('./models/keyPress');
const keyRelease = require ('./models/keyRelease');
const keyMouseDown = require('./models/keyMouseDown');
// const keyMouseUp = require('./models/keyMouseUp');
const WordsData = require('./models/gameData.js');
const MathsData = require('./models/gameData.js');
const FlagsData = require('./models/gameData.js');
const WordsView = require('./views/wordsView.js');
const MathsView = require('./views/mathsView.js');
const FlagsView = require('./views/flagsView.js');
const Words = require('./models/words.js');
const Maths = require('./models/maths.js');
const Flags = require('./models/flags.js');
const MapWrapper = require('./models/mapWrapper.js');



const app = function(){

  var mapDiv = document.getElementById('main-map');


  var center = { lat: 56.890671, lng: -4.202646 };

  var mainMap = new MapWrapper(mapDiv, center, 6);

  const wordsData = new WordsData('http://localhost:5000/api/words');
  const mathsData = new MathsData('http://localhost:5000/api/maths');
  const flagsData = new FlagsData('http://localhost:5000/api/flags');
  const wordsView = new WordsView(document.querySelector('.game-window'));
  const mathsView = new MathsView(document.querySelector('.game-window'));
  const flagsView = new FlagsView(document.querySelector('.game-window'));

  const flagButton = document.querySelector('#flag-game-button');

  const animalButton = document.querySelector('#animal-game-button');
  const colourButton = document.querySelector('#colour-game-button');
  const clothingButton = document.querySelector('#clothing-game-button');
  const foodButton = document.querySelector('#food-game-button');

  const addButton = document.querySelector('#add-game-button');
  const minusButton = document.querySelector('#minus-game-button');
  const multiplyButton = document.querySelector('#multiply-game-button');
  const divideButton = document.querySelector('#divide-game-button');

  const testButton = document.querySelector('#test-game-button');
  const title = document.querySelector('#title');
  wordsData.getData();
  mathsData.getData();
  flagsData.getData();

  var deleteButtons = function(){
    animalButton.parentNode.removeChild(animalButton);
    clothingButton.parentNode.removeChild(clothingButton);
    foodButton.parentNode.removeChild(foodButton);
    colourButton.parentNode.removeChild(colourButton);
    testButton.parentNode.removeChild(testButton);
    addButton.parentNode.removeChild(addButton);
    minusButton.parentNode.removeChild(minusButton);
    divideButton.parentNode.removeChild(divideButton);
    multiplyButton.parentNode.removeChild(multiplyButton);
    title.parentNode.removeChild(title);
    flagButton.parentNode.removeChild(flagButton);
  }





  flagButton.addEventListener('click', function(){
    deleteButtons();
    mapDiv.classList.remove('dont-display');
    var gameData = flagsData.giveData();
    const flags = new Flags(gameData, flagsView, mainMap);
    flags.getFlagsToPlay();
    flags.prepareRound(0);
    keyPress(flags);
    keyRelease();
    keyMouseDown(flags);
    // keyMouseUp();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(flags.wordsToPlay[flags.roundCount].name)
    });
  })

  addButton.addEventListener('click', function(){
    deleteButtons();

    var gameData = mathsData.giveData();
    const maths = new Maths(gameData, mathsView);
    maths.getMathsToPlay('add');
    maths.prepareRound(0);
    keyPress(maths);
    keyRelease();
    keyMouseDown(maths);
    // keyMouseUp();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(maths.problemsToPlay[maths.roundCount].problem);
    });

  });

  minusButton.addEventListener('click', function(){
    deleteButtons();

    var gameData = mathsData.giveData();
    const maths = new Maths(gameData, mathsView);
    maths.getMathsToPlay('minus');
    maths.prepareRound(0);
    keyPress(maths);
    keyRelease();
    keyMouseDown(maths);
    // keyMouseUp();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(maths.problemsToPlay[maths.roundCount].problem)
    });

  });

  divideButton.addEventListener('click', function(){
    deleteButtons();

    var gameData = mathsData.giveData();
    const maths = new Maths(gameData, mathsView);
    maths.getMathsToPlay('divide');
    maths.prepareRound(0);
    keyPress(maths);
    keyRelease();
    keyMouseDown(maths);
    // keyMouseUp();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(maths.problemsToPlay[maths.roundCount].problem)
    });

  });

  multiplyButton.addEventListener('click', function(){
    deleteButtons();

    var gameData = mathsData.giveData();
    const maths = new Maths(gameData, mathsView);
    maths.getMathsToPlay('times');
    maths.prepareRound(0);
    keyPress(maths);
    keyRelease();
    keyMouseDown(maths);
    // keyMouseUp();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(maths.problemsToPlay[maths.roundCount].problem)
    });

  });


  animalButton.addEventListener('click', function(){
    deleteButtons();


    var gameData = wordsData.giveData();
    const words = new Words(gameData, wordsView);
    words.getWordsToPlay('animal');
    words.prepareRound(0);
    keyPress(words);
    keyRelease();
    keyMouseDown(words);
    // keyMouseUp();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(words.word, "Russian Female")
    });

  });

  foodButton.addEventListener('click', function(){
    deleteButtons();


    var gameData = wordsData.giveData();
    const words = new Words( gameData, wordsView);
    words.getWordsToPlay('food');
    words.prepareRound(0);
    keyPress(words);
    keyRelease();
    keyMouseDown(words);
    // keyMouseUp();


    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(words.word, "Polish Female")
    });

  });

  colourButton.addEventListener('click', function(){
    deleteButtons();


    var gameData = wordsData.giveData();
    const words = new Words(gameData, wordsView);
    words.getWordsToPlay('colour');
    words.prepareRound(0);
    keyPress(words);
    keyRelease();
    keyMouseDown(words);
    // keyMouseUp();


    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(words.word, "Italian Female")
    });

  });

  clothingButton.addEventListener('click', function(){
    deleteButtons();


    var gameData = wordsData.giveData();
    const words = new Words( gameData, wordsView);
    words.getWordsToPlay('clothing');
    words.prepareRound(0);
    keyPress(words);
    keyRelease();
    keyMouseDown(words);
    // keyMouseUp();


    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(words.word, "Afrikaans Male")
    });

  });

  testButton.addEventListener('click', function(){
    deleteButtons();


    var gameData = wordsData.giveData();
    const words = new Words(gameData, wordsView);
    words.getWordsToPlay('test');
    words.prepareRound(0);
    keyPress(words);
    keyMouseDown(words);
    // keyMouseUp();
    keyRelease();


    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(words.word)
    });






  });



};
window.addEventListener('load', app);
