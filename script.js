const containerEl = document.querySelector(".container");

const careers = [
  "Front End Developer",
  "Full Stack Developer",
  "Software Engineer",
  "React Developer",
  "JavaScript Developer",
  "Node.js Developer",
  "Web Developer",
  "Freelance Developer",
];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
updateText();

function updateText() {
  containerEl.innerHTML = `
    <h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>
`;
  characterIndex++;
  if(characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if(careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
