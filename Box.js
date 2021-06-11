class Box {
    constructor(x,y,width,hight){
        var options={
            restitution: 1
        }
        this.body=Bodies.rectangle(x,y,width,hight,options);
        this.width=width;
        this.hight=hight;

        World.add(world,this.body);
    }
        display(){
            var pos=this.body.position;
            var angle=this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          
            rectMode(CENTER);
            fill(255);
            rect(0,0,this.width,this.hight);
            pop();
        
        

    }
}