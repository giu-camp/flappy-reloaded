import { Tube } from "../prefabs/tube";

export class Game extends Phaser.State {

    private bird;
    private spaceKey: Phaser.Key;
    private speedY = 0;
    private gravity = 0.1;
    private floorTubesArray = [];
    private ceilingTubesArray = [];
    private backgrounds = [];
    public create(): void {
        for (let i = 0; i < 2; i++) {
            const background = this.game.add.sprite(0, 0, "background");
            background.height = 480;
            background.x = (background.width) * i;
            this.backgrounds.push(background);
        }
        this.bird = this.game.add.sprite(75, 100, "bird");
        //this.bird.anchor.setTo(0.5);
        this.bird.scale.setTo(0.7);
        for ( let i = 0; i < 10; i++ ) {
            const heightVariation = (Math.random() * (100 + 100) - 100);

            const floorTube = new Tube(this.game, 600 + i * 600, 615 + heightVariation + 50 );
            this.floorTubesArray.push ( floorTube );

            const ceilingTube = new Tube(this.game, 600 + i * 600, 615 + heightVariation);
            ceilingTube.angle = 180;
            ceilingTube.y -= 750;
            this.ceilingTubesArray.push ( ceilingTube );
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

        this.backgrounds.forEach(element => {
            element.x -= 1;
            if ( element.x + element.width < 0 ) {
                element.x += element.width * 2;
            }
        });
    }


}