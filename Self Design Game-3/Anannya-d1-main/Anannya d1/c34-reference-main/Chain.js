class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stifness:0.5
        }
        this.chain=Constraint.create(options);
        World.add(myWorld,this.chain);
    }
    show(){
        var Position1=this.chain.bodyA.position;
        var Position2=this.chain.bodyB.position;
        stroke("black");
        strokeWeight(7);
        line(Position1.x,Position1.y,Position2.x,Position2.y);
    }
}