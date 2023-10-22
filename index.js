let button = document.querySelector(".btn");
let advice = document.querySelector("p");
let id = document.querySelector("span");

button.addEventListener("click", () => {
  adviceGenerator();
});

const adviceGenerator = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((adviceData) => {
      advice.textContent = `"${adviceData.slip.advice}"`;
      id.textContent = adviceData.slip.id;
    })
    .catch((error) => {
      console.log("There was a problem with the fetch operation:", error);
    });
};
