import ship from "./ship";
import Brick from "./Brick";
import Missile from "./Missile";

const game = {
    canvas: document.querySelector('#game'),
    ctx : null,
    brickCount : 30,
    bricks: [],
    missileCount : 10,
    missiles : [],


    init(){
        this.ctx = this.canvas.getContext('2d');
        ship.init(this);
        for (let i = 0; i < this.brickCount; i++ ){
            this.bricks.push(new Brick(this));
        }


        this.animate();
    },
    animate(){
        window.requestAnimationFrame(()=>{
            this.animate();
        })
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        ship.update();
        this.bricks.forEach(brick =>{
            brick.update();
        })
        this.missiles.forEach(missile=>{
            missile.update();
        })

    },
}
game.init();
