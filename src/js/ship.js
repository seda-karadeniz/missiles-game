import Missile from "./Missile";

const ship = {
    game : null,
    x:0,
    y:0,
    speed: 0.02,


    init(game){
        this.game = game;
        this.y = this.game.canvas.height - 70;
        this.x = this.game.canvas.width /2;


    },
    update(){
        this.draw();

        window.addEventListener('keydown',(e)=>{
            if (e.key === 'ArrowLeft'){
                this.goLeft();
            }
            if (e.key === 'ArrowRight'){
                this.goRight();
            }
            if (e.key === ' '){
                this.game.missiles.push(new Missile(this.game, ship.x, ship.y));

            }

        })


    },
    draw(){
        this.game.ctx.beginPath();
        this.game.ctx.moveTo(this.x, this.y);
        this.game.ctx.lineTo(this.x-10, this.y+20);
        this.game.ctx.lineTo(this.x+10, this.y+20);
        this.game.ctx.fillStyle = 'orange';
        this.game.ctx.fill();
        this;this.game.ctx.fillStyle = 'black';

        this.game.ctx.closePath()
    },
    goRight(){
        if (this.x + 10/*10 car cest la largeur entre le point principale et le coté*/ > this.game.canvas.width ){
            this.x = this.game.canvas.width - 10;
            //pour qu'il reste dans sont coin

        }

        this.x += this.speed;
    },
    goLeft(){
        if ( this.x -10 < 0 ){
            this.x = 10;
        }


        this.x -= this.speed;
    },
}
export default ship;