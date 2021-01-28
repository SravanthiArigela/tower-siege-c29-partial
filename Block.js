class Block{
    constructor(x,y,width, height){
        var options={
            restitution :0.4,
            friction :0.0
        }

        this.block = Bodies.rectangle(x,y,width, height);
        this.width = width;
        this.height = height;

        World.add(world, this.block);
    }

    display(){
        var pos= this.block.position;
        var angle = this.block.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("indigo");
        strokeWeight(3);
        fill("purple");
        rect(0, 0, this.width, this.height);
        pop();
    }
}