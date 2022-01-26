// URL to retreive data. Mine is public so anyone can get it
let url = 'https://io.adafruit.com/api/v2/jahrndt/feeds/trumptweets';

let counter = 0;

let tweet;


function setup() {
  createCanvas(windowWidth-windowWidth/4, windowWidth/3);
  //textFont(Arial);
  tweet = loadImage('img/twitter.png');
}

function windowResized() {
  resizeCanvas(windowWidth-windowWidth/4, windowHeight/3);
}

function draw() {
  //fill(255, 10);
  //rect(0, 0, width, height);
  // only pull this every once in awhile
  if (counter % 180 == 0) {
    getData(); // function for calling data

  }
  counter++;
     
image(tweet,0+10,0,30,30);
}

function getData() {
  let data1;  
  // local var to get last value
  // this calls a GET function, which requests a URL
  // the arguments are the url to request, the kind of data to expect,
  // and a callback function once the data is ready
  httpGet(url, 'json', function(response) {
    console.log(response);
    
    data = response.last_value; // store the data we're interested in
    // draw an ellipse
    //noStroke();
    //fill(255, 0, 0);
    //ellipse(data, height / 2, 25, 25);
    // print out the data we're keen to see
    //console.log(data);
noStroke();  
textSize(36);
fill(255);
rect(0,0,width,height);
fill(29,161,242);    
text(data, 50,10,width-50,height-20);
  });

}
