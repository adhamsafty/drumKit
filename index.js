var buttons = document.querySelectorAll(".drum");
for (var i of buttons) {
  i.addEventListener("click", function () {
    playSound(this.innerHTML);
    addAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  addAnimation(event.key);

});


function addAudio(url) {
  var audio = new Audio(url);
  audio.play();
}

function addAnimation(key) {
  document.querySelector("." + key).classList.toggle("pressed");
  setTimeout(function() {
    document.querySelector("." + key).classList.toggle("pressed");
  }, 100);
}

function playSound(key) {
  switch(key) {
    case 'w':
      addAudio("sounds/crash.mp3");
      break;
    case 'a':
      addAudio("sounds/tom-1.mp3");
      break;
    case 's':
      addAudio("sounds/tom-3.mp3");
      break;
    case 'd':
      addAudio("sounds/snare.mp3");
      break;
    case 'j':
      addAudio("sounds/kick-bass.mp3");
      break;
    case 'k':
      addAudio("sounds/tom-4.mp3");
      break;
    case 'l':
      addAudio("sounds/tom-2.mp3");
      break;
    default:
  }
}
