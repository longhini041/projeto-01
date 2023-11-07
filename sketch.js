function setup() {
    createCanvas(400, 400);
     background ( "red")
  }
  
  function draw() {
    
   stroke ("blue")
    fill ("black")
   
    
    
    if(mouseIsPressed)
    rect (mouseX, mouseY, 20, 20)
  }