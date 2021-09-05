export default class Missile{
    constructor(game,x,y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.height = 5;
        this.width = 2 ;
        this.speed = 2;
    }
    update(){

        this.draw();
        this.y -= this.speed;

    }
    draw(){
        this.game.ctx.beginPath();

        this.game.ctx.rect(this.x, this.y, this.width, this.height);
        this.game.ctx.fillStyle = 'black';
        this.game.ctx.fill();


        this.game.ctx.closePath();
    }
}