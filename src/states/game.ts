import { Tube } from "../prefabs/tube";

export class Game extends Phaser.State {

    private bird;
    private spaceKey: Phaser.Key;
    private speedY = 0;
    private gravity = 0.1;

    private floorTubesArray = [];
    private ceilingTubesArray = [];

    private background;

    public create(): void {
        this.background = this.game.add.sprite(0, 0, "background");
        this.background.height = 480;

        this.bird = this.game.add.sprite(75, 100, "bird");
        this.bird.anchor.setTo(0.5);

        for ( let i = 0; i < 10; i++ ) {

            const currentTube = new Tube(this.game, 600 + i * 300, 600);
            this.floorTubesArray.push ( currentTube );
        }
        for ( let i = 0; i < 10; i++ ) {

            const currentTube = new Tube(this.game, 600 + i * 300, 600);
            currentTube.angle = 180;
            currentTube.y -= 750;
            this.ceilingTubesArray.push ( currentTube );
        }

        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceKey.onDown.add(() => {
            this.speedY = -5;
        }, this);
    }

    public update() {
        this.speedY += this.gravity;
        this.bird.y += this.speedY;

        this.bird.angle = this.speedY * 5;

        for ( let i = 0; i < this.floorTubesArray.length; i++ ) {
            this.floorTubesArray[i].x -= 5;
            this.ceilingTubesArray[i].x -= 5;
        }

        this.background.x -= 0.5;
    }


}