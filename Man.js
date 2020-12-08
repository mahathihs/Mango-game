class Man{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.004
        }
        this.image=loadImage("images/boy.png");
        this.pointB=pointB
        this.man=Constraint.create(options);
        World.add(world,this.man);
    }
    fly()
    {
        this.man.bodyA=null;
    }
    display()
    {
        image(this.man,200,20);
        if(this.man.bodyA){
            var pointA = this.man.bodyA.position;
            var pointB = this.pointB;
            push();
           
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(5);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.man,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(5);
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.man,pointA.x-25,pointA.y-10,15,30);
            }
            pop();
        }

    }
}