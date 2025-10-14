// Windows

// Game Modes
document.getElementById("game-mode-btn").addEventListener("click", function () {
    document.querySelector(".main-menu").style.display = "none";
    document.getElementById("game-mode-wdw").style.display = "block";
});
// set up game mode selector 1/2
document.getElementById("close-game-mode-wdw").addEventListener("click", function () {
    document.getElementById("game-mode-wdw").style.display = "none";
    document.querySelector(".main-menu").style.display = "block";
});
// set up play game mode button

// Options
document.getElementById("option-btn").addEventListener("click", function () {
    document.querySelector(".main-menu").style.display = "none";
    document.getElementById("option-wdw").style.display = "block";
});
document.getElementById("close-option-wdw").addEventListener("click", function () {
    document.getElementById("option-wdw").style.display = "none";
    document.querySelector(".main-menu").style.display = "block";
});
const DifficultyButton = document.getElementById("option-1-btn");
const difficulties = ['Easy', 'Medium', 'Hard'];
let DifficultyIndex = 0
button.addEventListener("click", () => {
    DifficultyIndex = (DifficultyIndex + 1) % difficulties.length;
    button.textContent = difficulties[DifficultyIndex];
    const DifficultyEvent = new CustomEvent("difficultyChange", {
        detail: { difficulty: newDifficulty }
    });
    button.dispatchEvent(DifficultyEvent);
});
const TimeButton = document.getElementById("option-2-btn");
const time = ['0,5 min', '1 min', '1,5 min', '2 min', '3 min'];
let TimeIndex = 0
button.addEventListener("click", () => {
    TimeIndex = (TimeIndex + 1) % time.length;
    button.textContent = time[TimeIndex];
    const TimeEvent = new CustomEvent("timeChange", {
        detail: { time: newTime }
    });
    button.dispatchEvent(TimeEvent)
});

// Settings
document.getElementById("setting-btn").addEventListener("click", function () {
    document.querySelector(".main-menu").style.display = "none";
    document.getElementById("setting-wdw").style.display = "block";
});
document.getElementById("close-setting-wdw").addEventListener("click", function () {
    document.getElementById("setting-wdw").style.display = "none";
    document.querySelector(".main-menu").style.display = "block";
});

// Sensitivity wdw
document.getElementById("setting-3-btn").addEventListener("click", function () {
    document.querySelector(".setting-wdw").style.display = "none";
    document.getElementById("senstivity-wdw").style.display = "block";
});
document.getElementById("close-sensitivity-wdw").addEventListener("click", function () {
    document.getElementById("sensitivity-wdw").style.display = "none";
    document.querySelector(".setting-wdw").style.display = "block";
});
// test for sens 
const SensRange = document.getElementById("sensitivity-1-range");
const SensInput = document.getElementById("sensitivity-1-number");
SensRange.addEventListener("input", () => {
    const SensValue = parseFloat(SensRange.value).toFixed(3);
    SensInput.value = SensValue;
});
SensInput.addEventListener("input", () => {
    let SensValue = parseFloat(SensInput.value);
    if (isNaN(SensValue)) return;
    if (SensValue < 0.001) SensValue = 0.001;
    if (SensValue > 1) SensValue = 1;
    SensValue = parseFloat(SensValue).toFixed(3);
    SensRange.value = SensValue;
    SensInput.value = SensValue;
});
