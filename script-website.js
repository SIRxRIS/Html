// JavaScript untuk mengatur warna tombol sesuai dengan variabel CSS
document.addEventListener("DOMContentLoaded", function () {
  const primaryBtns = document.querySelectorAll(".btn-primary");
  const secondaryBtns = document.querySelectorAll(".btn-secondary");
  const infoBtns = document.querySelectorAll(".btn-info");
  const warningBtns = document.querySelectorAll(".btn-warning");
  const dangerBtns = document.querySelectorAll(".btn-danger");

  primaryBtns.forEach(function (btn) {
    btn.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
    btn.style.color = "white";
  });

  secondaryBtns.forEach(function (btn) {
    btn.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-secondary-color');
    btn.style.color = "white";
  });

  infoBtns.forEach(function (btn) {
    btn.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-info-color');
    btn.style.color = "white";
  });

  warningBtns.forEach(function (btn) {
    btn.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-warning-color');
    btn.style.color = "white";
  });

  dangerBtns.forEach(function (btn) {
    btn.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-danger-color');
    btn.style.color = "white";
  });
});