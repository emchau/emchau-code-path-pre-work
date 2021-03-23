# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Emily Chau**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/faithful-rich-blanket

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added a replay button feature. Allows user to replay current sequence.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![ ](https://im3.ezgif.com/tmp/ezgif-3-2ed3fa7bba5c.gif)
![ ](https://im3.ezgif.com/tmp/ezgif-3-edca14e79fe3.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   https://www.w3schools.com/js/js_random.asp
   https://www.w3schools.com/cssref/css_colors.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   I have never written in JavaScript before so it was interesting to see how it was connected to HTML and understanding the new function calls like getElementById.
   Another issue I had was implementing my own feature I wanted which was the replay button. Before that, I made it faster after you progressed to each round but since
   replay calls playClueSequence(), it was speeding up everytime I hit replay. After being able to identify where my issue lied, I had to play around with when to decrement
   the hold time and found it best before playing the next clue sequence which is in the guess function since that's when we officially move to the next round. By adding
   more features, especially with something like replay, I thought about the ways it could break or make the game less clear. I had to account for playing a sequence
   before the game even started, but I noticed connections in guess and just brought that in my new function as well. I also was worried about the replay confusing people
   off if that mean to pick up where they left off or if that round restarted completely. I did not overcome it, but it was just a thought. If I had more time, I would
   create a hover feature with a textbox explaining how to use it.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   I want to figure out how to better use containers and fit elements on the page. Usually when we go on websites on our phones, everything is messed up due to the different
   dimensions, so i would like to play more with the dimensions to keep it aesthetically pleasing. For example, maybe when the window gets smaller, instead of shifting the
   boxes, how might I be able to have the boxes shrink with it? Also, I noticed when opening the live site on a whole new window, the sound wouldn't play and looked at the
   console, but couldn't figure it out. It works perfectly fine in the IDE, so how is AudioContext different on the live site?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   While playing the game, it might seem like forever where the game never ends so I would add an additional feature above the boxes that is a round counter (eg."1 out of 8" or
   "8 out of 8") so they are also more motivated to beat the game by know they are getting closer. I would add possibly another header and will update the text in guess if they move
   progress by 1. I also like the idea of allowing 3 mistakes, but it is a bit easier with the replay function already. The mistakes will be implemented by another global variable
   similar to guessCounter and after each mistake, increment by 1 and check in guess if it equals to 3 and then call loseGame().

## License

    Copyright Emily Chau

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
