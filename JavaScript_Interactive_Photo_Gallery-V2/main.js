function previewImage(imageSrc, imageName) {
  var imagePreview = document.getElementById("imagePreview");
  var changeText = document.getElementById("placeholderText");
  changeText.textContent = imageName;
  imagePreview.src = imageSrc;
}

function resetPreview() {
  var imagePreview = document.getElementById("imagePreview");
  var changeText = document.getElementById("placeholderText");
  changeText.textContent = "Hover img";
  imagePreview.src = "./pic/default.jpg";
}
