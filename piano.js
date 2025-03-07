// 각 키에 해당하는 소리 파일 매핑
const sounds = {
  C4: "sounds/C4.mp3",
  "C#4": "sounds/C-sharp4.mp3",  // 변경됨
  D4: "sounds/D4.mp3",
  "D#4": "sounds/D-sharp4.mp3",  // 변경됨
  E4: "sounds/E4.mp3",
  F4: "sounds/F4.mp3",
  "F#4": "sounds/F-sharp4.mp3",  // 변경됨
  G4: "sounds/G4.mp3",
  "G#4": "sounds/G-sharp4.mp3",  // 변경됨
  A4: "sounds/A4.mp3",
  "A#4": "sounds/A-sharp4.mp3",  // 변경됨
  B4: "sounds/B4.mp3",
  C5: "sounds/C5.mp3"
};


// 마우스로 클릭하면 소리 재생
document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", () => playSound(key.dataset.note));
});

// 키보드 입력 이벤트 처리
document.addEventListener("keydown", (event) => {
  const keyMap = {
      "a": "C4",
      "w": "C#4",
      "s": "D4",
      "e": "D#4",
      "d": "E4",
      "f": "F4",
      "t": "F#4",
      "g": "G4",
      "y": "G#4",
      "h": "A4",
      "u": "A#4",
      "j": "B4",
      "k": "C5"
  };

  const note = keyMap[event.key];
  if (note) playSound(note);
});

// 사운드 재생 함수
function playSound(note) {
  const audio = new Audio(sounds[note]);
  audio.play();
}
