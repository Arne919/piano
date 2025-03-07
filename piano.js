// 각 키에 해당하는 소리 파일 매핑
const sounds = {
  C: "sounds/C.mp3",
  D: "sounds/D.mp3",
  E: "sounds/E.mp3",
  F: "sounds/F.mp3",
  G: "sounds/G.mp3",
  A: "sounds/A.mp3",
  B: "sounds/B.mp3",
  C_high: "sounds/C_high.mp3"
};

// 키보드와 버튼 클릭 이벤트 연결
document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", () => playSound(key.dataset.note));
});

// 키보드 입력 이벤트 처리
document.addEventListener("keydown", (event) => {
  const keyMap = {
      "a": "C",
      "s": "D",
      "d": "E",
      "f": "F",
      "g": "G",
      "h": "A",
      "j": "B",
      "k": "C_high"
  };

  const note = keyMap[event.key];
  if (note) playSound(note);
});

// 사운드 재생 함수
function playSound(note) {
  const audio = new Audio(sounds[note]);
  audio.play();
}
