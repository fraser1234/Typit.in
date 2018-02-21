const assert = require('assert');
const Words = require('../words.js');
const KeyBoard = require('../keyboard.js');
const WordsData = require('../wordsData.js');
const WordsView = require('../../views/wordsView.js');


describe('Words', function () {
  let words;
})
beforeEach(function(){
  var keyBoard = new KeyBoard();
  var gamedata = [
    {
		"_id": "5a7eef69a2b10990107c5148",
		"word": "apple",
		"category": "food",
		"image": "/images/food/apple.svg"
	},
	{
		"_id": "5a7eef69a2b10990107c5149",
		"word": "banana",
		"category": "fruit",
		"image": "/images/food/banana.svg"
	}
  ]
  var gameView = WordsView
  words = new Words(keyBoard, gamedata, gameView);
});

it('should start with an empty word', function(){
  assert.strictEqual(words.word, "");
});

it('should start with an empty answer', function(){
  assert.strictEqual(words.answer, "");
});

it('should be able to set a word', function(){
  words.word = "apple"
  assert.strictEqual(words.word, "apple");
});

it('should be able to set an answer', function(){
  words.answer = "apple"
  assert.strictEqual(words.answer, "apple");
});

it('should start with an empty wordsToPlay', function(){
  assert.strictEqual(words.wordsToPlay.length, 0);
});

it('should setWord and setAnswerLength', function(){
  words.setWord('test')
  words.setAnswerLength();
  assert.deepEqual(words.answer, "____");
  assert.strictEqual(words.word, "test");
});

it('should be able to set a word from gamedata', function(){
  words.setWord(words.gamedata[0].word);
  assert.strictEqual(words.word, "apple");
});

it('should be able to set wordsToPlay based on category', function(){
  words.getWordsToPlay('fruit')
  assert.strictEqual(words.wordsToPlay.length, 1);
});

it('should be able to set wordsToPlay with no provided category', function(){
  words.getWordsToPlay()
  assert.strictEqual(words.wordsToPlay.length, 2);
});

it('should be able to fill in answer', function(){
  words.setWord('apple')
  words.setAnswerLength();
  words.fillAnswer('a');
  words.fillAnswer('p');
  assert.strictEqual(words.answer, "ap___");
});

it('should not accept the wrong letter', function(){
  words.setWord('apple')
  words.setAnswerLength();
  words.checkLetter('z')
  assert.strictEqual(words.answer, "_____");
});



it('should be able to check letter', function(){
  words.setWord('apple')
  words.setAnswerLength();
  words.checkLetter('a')
  words.checkLetter('p')
  words.checkLetter('z')
  words.checkLetter('p')
  assert.strictEqual(words.answer, "app__");
});

it('should start with a next letter', function(){
  words.setWord('apple');
  words.setAnswerLength();
  assert.strictEqual(words.nextletter, "a");
});

it('should have next letter', function(){
  words.setWord('apple');
  words.setAnswerLength();
  words.checkLetter('a');
  words.checkLetter('p');
  words.checkLetter('p');
  words.checkLetter('l');
  assert.strictEqual(words.nextletter, "e");
});

it('nextletter should be empty when game complete', function(){
  words.setWord('apple');
  words.setAnswerLength();
  words.checkLetter('a');
  words.checkLetter('p');
  words.checkLetter('p');
  words.checkLetter('l');
  words.checkLetter('e');
  assert.strictEqual(words.nextletter, "");
});





// it('should prepare a round', function(){
//   words.prepareRound(0);
//   assert.strictEqual(words.word, "apple");
// })
