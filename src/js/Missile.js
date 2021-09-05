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
        this.collision()
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
    collision(){
        this.colisionHaut();
        this.colisionBrick();
    }
    colisionHaut(){
        if (this.y + this.height < 0){
            this.game.missiles.shift();
        }
    }
    colisionBrick() {
        this.game.bricks.forEach(brick =>{

            if (this.y <= brick.position.y + brick.height
                && this.y >= brick.position.y
                &&  this.x <= brick.position.x + brick.width
                && this.x >= brick.position.x
            ) {

                delete brick.position.x;
                delete brick.position.y;
                delete this.x;
                delete this.y;

            }
        })

    }
}