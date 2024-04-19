var imageURLs = ["assets/installatie/installatie shots-48.jpg", "assets/installatie/installatie shots-46.jpg", "assets/installatie/installatie shots-52.jpg", "assets/installatie/installatie shots-51.jpg", "assets/installatie/installatie shots-50.jpg", "assets/installatie/installatie shots-47.jpg"];

function getImageTag() {
 var img = '<img class="index__picture" src=\"';
 var randomIndex = Math.floor(Math.random() * imageURLs.length);
 img += imageURLs[randomIndex];
 img += '\" alt=\"...\"/>';
 return img;
}