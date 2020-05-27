class baseWall
{
    constructor(x, y)
    {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 100, 20, options);
        this.width = 100;
        this.height = 20;
        World.add(world, this.body)
    }

    display() 
    {
        rectMode(CENTER);
        strokeWeight(0);
        fill("white");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }

}