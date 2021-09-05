export default class Brick{
    constructor(game) {
        this.game = game;
        this.position = {
            x:Math.floor(Math.random() * this.game.canvas.width ),
            y:Math.floor(Math.random() * 200)

        }

        this.width = 20;
        this.height = 10;
        this.speed = {
            x: (-1 + Math.random() * 2),
            y: (-1 + Math.random() * 2)
        }

        this.color = Brick.colors.sort(() => 0.5 - Math.random())[0];
    }
    update(){
        this.draw();

        if (this.position.y + this.height > (this.game.canvas.height - 100 )|| this.position.y < 0){
            this.speed.y = -this.speed.y
        }
        if (this.position.x + this.width > this.game.canvas.width || this.position.x  < 0){
            this.speed.x = -this.speed.x
        }

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
    draw(){
        this.game.ctx.beginPath();

        this.game.ctx.rect(this.position.x, this.position.y, this.width, this.height);
        this.game.ctx.fillStyle = this.color;
        this.game.ctx.fill();
        this.game.ctx.fillStyle = 'black';

        this.game.ctx.closePath();
    }
    static get colors() {
        return ['#a77f8b', '#8b7bcf', '#7bbe72', '#d4a65d', '#D6384F'];
    }
}