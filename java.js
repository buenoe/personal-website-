

var pic = document.getElementById('myPic');

var list = ['makeup2.jpg','makeup3.jpg','makeup4.jpg'];

var index = 0;

function slideshow () {
  pic.setAttribute('src', list[index]);

  if (index == list. length - 1) {
    index=0;
  }
  else{
    index++;
  }
}
setInterval(slideshow,2000);
