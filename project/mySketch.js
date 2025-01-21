
function setup() {
  createCanvas(500, 500, WEBGL);
}
let hmm = 10
let abc = 10

function draw() {

  rotateY(hmm/100);
  rotateX(abc/100);

  rect(-140, -150, 305, 300, 15, 150, 13, 40);
}
function mousePressed () {
  if (mouseX>hmm)
    hmm = hmm +(((mouseX+1)-(hmm+1))/20)
  if (mouseX<hmm)
    hmm = hmm -(((hmm+1)-(mouseX+1))/20)
  if (mouseY>abc)
    abc = abc +(((mouseY+1)-(abc+1))/20)
  if (mouseY<abc)
    abc = abc -(((abc+1)-(mouseY+1))/20)
  
}