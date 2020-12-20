class Ground{
    constructor(x,y,height,width){
        var options={
            isStatic:true
        }
        this.body.Bodies.rectangle(x,y,height,width,options);
        this.height=height;
        this.width=width;
        World.add(World,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.height,this.width)
        fill(255)
        pop();    }
}