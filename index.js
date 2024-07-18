
const img = document.createElement("img");
img.src = "photo_2024-07-18_19-07-41.jpg";
img.alt = "Поцелуй кобры)";
img.width='600';
let button = document.querySelector("button");
const container = document.querySelector(".id-container");

button.addEventListener("click", function () {
  container.append(img);
});
