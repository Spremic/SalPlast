let questionContainer = document.querySelector(".contactLeft");

questionContainer.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("add")) {
    let parent = target.parentElement.parentElement;
    let answer = parent.querySelector(".answer");
    let iconX = parent.querySelector(".add");
    answer.style.display = "grid";
    iconX.innerHTML = "close";
    iconX.classList.remove(iconX.classList[1]);
    iconX.classList.add("close");
  } else if (target.innerHTML === "close") {
    let parent = target.parentElement.parentElement;
    let answer = parent.querySelector(".answer");
    let iconX = parent.querySelector(".close");
    answer.style.display = "none";
    iconX.innerHTML = "add";
    iconX.classList.remove(iconX.classList[1]);
    iconX.classList.add("add");
  }
});
