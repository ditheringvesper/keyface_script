let myVideo;
let otherVideo;

function setup() {
  let constraints = {audio: false, video: true};
  myVideo = createCapture(constraints, 
    function(stream) {
	  let p5l = new p5LiveMedia(this, "CAPTURE", stream, "keyface")
	  p5l.on('stream', gotStream);
    }
  );  
  myVideo.elt.muted = true;     
  myVideo.hide();
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  imageMode(CENTER);
  image(myVideo,windowWidth/2,windowHeight/2,windowWidth,myVideo.height*windowWidth/myVideo.width);
  blendMode(LIGHTEST);
  if (otherVideo) {
    image(otherVideo, windowWidth/2,windowHeight/2, windowWidth, windowHeight);
    // image(myVideo,windowWidth/2,windowHeight/2,windowWidth,myVideo.height*windowWidth/myVideo.width);
    console.log('other joined');
  }

}

// We got a new stream!
function gotStream(stream, id) {
  otherVideo = stream;
  otherVideo.hide();
}

function mouseMoved() {
  console.log("reset!");
  clear();
  image(myVideo,windowWidth/2,windowHeight/2,windowWidth,myVideo.height*windowWidth/myVideo.width);
  // myVideo.loadPixels();

  // const currentMyPixels = myVideo.pixels;
  // for (let i = 0; i < currentMyPixels.length; i++) {
  //   bgPixels[i] = currentMyPixels[i];
  // }
}