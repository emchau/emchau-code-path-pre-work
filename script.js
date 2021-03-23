// global constants
var clueHoldTime = 1000; // how long button held for
const cluePauseTime = 333; // pause bt clues
const nextClueWaitTime = 1000; // wait before play next clue seq

//Global Variables
var pattern = [2, 2, 4, 5, 3, 1, 2, 6];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be bt 0.0 and 1.0
var guessCounter = 0;

function setNewPattern(){
  for(var i=0; i < pattern.length; i++){
    pattern[i] = Math.floor(Math.random() * 6) + 1; // select number 1 to 6
  }
}

// start and stop game
function startGame(){
    //initialize game variables
    setNewPattern();
    progress = 0;
    clueHoldTime = 1000;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// button lighting up and clearing
function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

// clues
function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; // set delay to initial wait time
  for(let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// replay feature
function replay() {
  if(!gamePlaying) { // game hasn't started
    return;
  }
  playClueSequence();
}

// guess logic
function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying) { // if game hasn't started
    return;
  } else if (btn != pattern[guessCounter]) { // check if correct
    loseGame();
  } else if (guessCounter != progress) { // so far so good, check next guess
    guessCounter += 1;
  } else if (progress != pattern.length - 1) { // 
    progress += 1;
    clueHoldTime -= 50;
    playClueSequence();
  } else {
    winGame();
  }
}

// end game
function loseGame() {
  stopGame();
  alert("Game over. You lost. Try again!")
}

function winGame() {
  stopGame();
  alert("Game over. Congrats, you won!")
}


// Sound Synthesis Functions
const freqMap = {
  1: 241.6,
  2: 299.6,
  3: 352,
  4: 407.2,
  5: 440,
  6: 470
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

