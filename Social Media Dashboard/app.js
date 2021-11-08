"use strict";

const dashboardItems = document.querySelectorAll(".dash-item");
const overviewItems = document.querySelectorAll(".overview-item");
const toggleMode = document.querySelector(".btn-switch");
const siteBG = document.querySelector("body");
const dashboardHeading = document.querySelector(".heading h2");
const overviewHeading = document.querySelector(".overview-title");
const header = document.querySelector("header");

//change background color of specific elements
const toggleBackgroundColor = () => {
  //change bg color of overview cards
  overviewItems.forEach((item) => {
    item.classList.toggle("dark-items");
  });
  //change bg color of dashboard cards
  dashboardItems.forEach((item) => {
    item.classList.toggle("dark-items");
  });
  //change color of website background
  siteBG.classList.toggle("dark-bg");
  //change color of header background
  header.classList.toggle("dark-header");
};

//change font color of dashboard and overview titles
const toggleFontColor = () => {
  dashboardHeading.classList.toggle("dark-dashboard");
  overviewHeading.classList.toggle("dark-overview");
};

toggleMode.addEventListener("click", function () {
  toggleBackgroundColor();
  toggleFontColor();
});
