document.addEventListener("DOMContentLoaded", function () {
  const sun = document.getElementById("sun");
  const audioPlayer = document.getElementById("music");
  const changeText = document.getElementById("headText");

  const texts = [
    "ILOVEYOU <3",
    "Universe is OURS!",
    "Proud Of You!",
    "You Can Do It!",
    "Wachap!? Pretty Girl!",
    "You Are Mine!",
    "You Look Beautiful",
    "Wow!! Planets!",
    "Headphones\nRecommended",
    "Lover!!!"
  ];

  const pausedMessages = [
    "Keep Playing Da..",
    "Shushh Dont\nPause It Again!",
    "I Told NOO!",
    "Gosh!! Not Again",
    "GUU KHALE!!",
    "Comeeeon!!",
    "Finee!!",
    "Look At Pluto!",
    "Let The Music Control Ü",
    "Better than Spotify"
  ];

  let playCount = 0; // Variable to track the number of times the audio is played
  let pausedMessageIndex = 0; // Variable to track the index of the current "Paused" message
  let easterEggShown = false; // Flag to check if the Easter egg text has been shown

  sun.addEventListener("click", function () {
    if (audioPlayer.paused) {
      // If the audio is paused, play it
      audioPlayer.play();
      playCount++;

      if (playCount === 1 && !easterEggShown) {
        changeText.innerText = "Yay! You Found\nEasterEgg :D";
        easterEggShown = true;
      } else {
        easterEggShown = false;
        if (playCount <= texts.length) {
          changeText.innerText = texts[playCount - 1];
        } else {
          playCount = 1;
          changeText.innerText = texts[playCount - 1];
        }
      }
    } else {
      // If the audio is playing, pause it
      audioPlayer.pause();

      // Cycle through the "Paused" messages
      changeText.innerText = pausedMessages[pausedMessageIndex];
      pausedMessageIndex = (pausedMessageIndex + 1) % pausedMessages.length;
    }
  });
});
