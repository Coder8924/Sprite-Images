class Bird extends BaseClass { 
    constructor(x,y){ 
        super(x,y,20,20);
        this.image = loadImage("bird.png");
    } display() 
    { this.body.position.x = mouseX; 
        this.body.position.y = mouseY; 
        super.display(); } 
    };
