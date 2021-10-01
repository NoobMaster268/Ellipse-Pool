let a = 700,b = 325;
let Rball = 20;
let e = Math.pow((1 - ((b-Rball)*(b-Rball)/((a-Rball)*(a-Rball)))), 0.5);

let Xball = [], Yball = [] , pi = Math.PI;
let theta = 
[pi/48, pi/17, pi/12, pi/6, pi/4, pi/2, pi/1.3,
-pi/48,-pi/17,-pi/12,-pi/6,-pi/4,-pi/2,-pi/1.3];
for(let k=0; k<14; k++){
    Xball[k] = -(a-Rball)*e;
    Yball[k] = 0;
}

function setup(){
    createCanvas(1500, 720);
}

function collision(ball){
    if( (Xball[ball]*Xball[ball])/((a-Rball)*(a-Rball)) + (Yball[ball]*Yball[ball])/((b-Rball)*(b-Rball)) >= 1){
        
        let m2 = ((Yball[ball])*(a-Rball)*(a-Rball))/((Xball[ball])*(b-Rball)*(b-Rball));

        theta[ball] = theta[ball] - Math.PI + 2 * ((atan(m2) - theta[ball])) ;
        
    }
}

function draw(){
    background(0);
    translate(750, 360);
    
    stroke(255,100);
    strokeWeight(0);
    fill(155,51,0);
    ellipse(0, 0, 1450, 700);
    strokeWeight(1);
    fill("green");
    ellipse(0, 0, 2*a, 2*b);
     
    fill("black");
    ellipse((a-Rball)*e, 0, Rball*2); 
    //fill(20,20,60,60);
    fill("green");
    ellipse(-(a-Rball)*e, 0, Rball*2); 

    for(let ball = 0; ball<14; ball++)
    {
        if(Xball[1] <= (a-Rball)*e){

            fill("white");
            ellipse(Xball[ball], Yball[ball], Rball*2); 

            for(let i = 0; i<100; i++){
                collision(ball);
                Xball[ball] += 1/10*cos(theta[ball]);
                Yball[ball] += 1/10*sin(theta[ball]);

            }
        }

    }


}
