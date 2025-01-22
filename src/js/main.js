var boxChangeColor = document.querySelector(".change-color");

var isActive = function () {
  boxChangeColor.classList.add("is-active");
};
boxChangeColor.addEventListener("click", isActive);

var boxToggleColor = document.querySelector(".toggle-color");

var isActive = function () {
  boxToggleColor.classList.toggle("is-active");
};
boxToggleColor.addEventListener("click", isActive);

var boxTarget = document.querySelector(".target");
var boxTrigger = document.querySelector(".trigger");
var isActive = function () {
  boxTrigger.classList.toggle("is-active");
  boxTarget.classList.toggle("is-passiv");
};
boxTrigger.addEventListener("click", isActive);

var isActive = function () {
  boxTrigger.classList.toggle("is-passiv");
  boxTarget.classList.toggle("is-active");
};
boxTarget.addEventListener("click", isActive);

var triggerAll = document.querySelector(".trigger-all");

var isActive = function () {
  boxChangeColor.classList.toggle("color-blue");
};
triggerAll.addEventListener("click", isActive);

var triggerAllSelf = document.querySelector(".trigger-all-self");

var isActive = function () {
  boxChangeColor.classList.toggle("color-blue");
  boxToggleColor.classList.toggle("color-red");
  triggerAllSelf.classList.toggle("color-green");
};
triggerAllSelf.addEventListener("click", isActive);
