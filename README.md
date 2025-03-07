# 🎹 심심해서 만든 피아노

## 1️⃣ 프로젝트 소개
**"심심해서 만든 피아노"**는 웹에서 직접 연주할 수 있는 가상 피아노입니다.
키보드 또는 마우스로 피아노 건반을 클릭하면 해당 음이 재생됩니다.
GitHub Pages를 통해 별도의 설치 없이 웹에서 사용할 수 있습니다.

- **기능:**
  - 키보드 입력 및 마우스 클릭으로 피아노 연주 가능
  - 흰 건반과 검은 건반 모두 지원
  - 브라우저에서 즉시 실행 가능

🔗 **데모 페이지:** [GitHub Pages에서 실행하기](https://arne919.github.io/piano/)

---

## 2️⃣ 개발환경
- **언어:** HTML, CSS, JavaScript
- **라이브러리:** 없음 (순수 JS 사용)
- **브라우저:** Chrome, Edge, Firefox, Safari 지원
- **배포:** GitHub Pages

---

## 3️⃣ 프로젝트 구조
```
📂 PIANO/
 ├── 📜 index.html       # 웹페이지 구조
 ├── 🎨 style.css        # 피아노 스타일링
 ├── 🎶 piano.js        # 피아노 기능 구현 (소리 재생)
 ├── 🎵 sounds/          # 피아노 음원 파일 (MP3)
 │    ├── C4.mp3
 │    ├── C-sharp4.mp3
 │    ├── D4.mp3
 │    ├── ...
 ├── 📖 README.md       # 프로젝트 설명
```

---

## 4️⃣ 개발기간
- **총 개발기간:** 약 30분 (2025.03.07))
- **주요 작업 내용:**
  - UI 구성 및 레이아웃 디자인(미완완)
  - 키보드 & 마우스 입력 이벤트 처리
  - 오디오 파일 로드 및 재생 기능 구현
  - GitHub Pages 배포 및 테스트

---

## 5️⃣ 트러블슈팅
### 🔥 1) GitHub Pages에서 소리가 나지 않는 문제
#### 문제 원인:
- 브라우저의 **Autoplay 보안 정책** 때문에 `audio.play()`가 차단됨.
#### 해결 방법:
- 사용자가 한 번 클릭하면 `AudioContext`를 활성화하여 문제 해결.

```js
let audioContext;
document.addEventListener("click", () => {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}, { once: true });
```

### 🔥 2) 파일명에 `#` 포함 문제
#### 문제 원인:
- 브라우저는 `#`을 URL의 특수 문자로 해석하여 `C#4.mp3` 파일을 인식하지 못함.
#### 해결 방법:
- 파일명을 `C-sharp4.mp3`로 변경하여 문제 해결.

```js
const sounds = {
  "C#4": "sounds/C-sharp4.mp3",
  "D#4": "sounds/D-sharp4.mp3",
  "F#4": "sounds/F-sharp4.mp3",
};
```

---

## 6️⃣ 개선방안

✨ 1) 키를 눌렀을 때에도 키가 시각적으로 눌리는 효과 추가 예정

✅ 추후 개발 예정

키보드의 키를 눌렀을 때도 화면에서 해당 건반이 눌린 것처럼 표시되도록 개선 예정.
---

🚀 **이제 웹에서 직접 피아노를 연주해보세요!** 🎶

