"use strict";

const dashboardItems = document.querySelectorAll(".dash-item");
const overviewItems = document.querySelectorAll(".overview-item");
const toggleMode = document.querySelector(".btn-switch");
const siteBG = document.querySelector("body");
const dashboardHeading = document.querySelector(".heading h2");
const overviewHeading = document.querySelector(".overview-title");
const header = document.querySelector("header");

toggleMode.addEventListener("click", function () {
  siteBG.classList.toggle("dark-bg");
  dashboardHeading.classList.toggle("dark-dashboard");
  overviewHeading.classList.toggle("dark-overview");
  header.classList.toggle("dark-header");
  overviewItems.forEach((item) => {
    item.classList.toggle("dark-items");
  });
  dashboardItems.forEach((item) => {
    item.classList.toggle("dark-items");
  });
});
