let x ;
let y ;

let h ;

function setup() {
  
    createCanvas(500,500);
    x = random(width);
    y = 0;
    h = 20;
    
}


function draw() {
  
    background(200);

    let sizeCar = 25

    draw_Car(mouseX,height-50,sizeCar);
    draw_Obj(x, y, h);
    
    y += 2;
    
    if(y>height+h*2){

        x = random(width);
        y = 0;

    }
}

function draw_Obj(x, y, size){ // build obj
  
  ellipse(x,y,size*2,size*2);
  
}

function draw_Car(x,y,size){ 
  
    line(x-size,y,x+size,y); // -
    line(x-size,y,x-size,y-size*3); // |
    line(x+size,y,x+size,y-size*3); // |
    line(x-size,y-size*3,x+size,y-size*3); // -
    
}
