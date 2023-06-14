let imageNumber = 0;
document.getElementById("myButton").addEventListener("click", changeImage);
let pic = [
  "https://opengameart.org/sites/default/files/queen_of_diamonds2.png",
  "https://opengameart.org/sites/default/files/king_of_hearts2.png",
  "https://opengameart.org/sites/default/files/7_of_clubs.png",
  "https://i.postimg.cc/SKdC8ygj/10-of-hearts.png",
  "https://i.postimg.cc/DfHs1pPQ/ace-of-spades.png",
  "https://i.postimg.cc/ZY2ssSSC/jack-of-hearts2.png",
];
function changeImage() {
  imageNumber = (imageNumber + 1) % pic.length;
  document.getElementById("getRanCard").src = pic[imageNumber];
}
