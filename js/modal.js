var modal = document.getElementById("myModal");

var img1 = document.querySelector(".myImg1");
var img2 = document.querySelector(".myImg2");
var img3 = document.querySelector(".myImg3");
var img4 = document.querySelector(".myImg4");
var img5 = document.querySelector(".myImg5");
var img6 = document.querySelector(".myImg6");
var img7 = document.querySelector(".myImg7");
var img8 = document.querySelector(".myImg8");
var img9 = document.querySelector(".myImg9");
var img10 = document.querySelector(".myImg10");
var img11 = document.querySelector(".myImg11");

var modalImg = document.querySelector("#img01");

img1.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img4.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};
img5.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img6.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};
img7.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img8.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};
img9.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img10.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};
img11.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

console.log(img);
