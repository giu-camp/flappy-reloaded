import { Tube } from "../prefabs/tube";
import { Bird } from "../prefabs/bird";

export class Game extends Phaser.State {

    private bird: Bird;
    private spaceKey: Phaser.Key;
    private escKey: Phaser.Key;
    private button;
    private pausecond = 0;
    private speedY = 0;
    private gravity = 0.1;
    private floorTubesArray = [];
    private ceilingTubesArray = [];
    private backgrounds = [];
    private scoreValue = 0;
    private score;
    private collision = 0;
    public create(): void {
        this.pausecond = 0;
        this.speedY = 0;
        this.floorTubesArray = [];
        this.ceilingTubesArray = [];
        this.backgrounds = [];
        this.scoreValue = 0;
        this.collision = 0;

        for (let i = 0; i < 2; i++) {
            const background = this.game.add.sprite(0, 0, "background");
            background.height = 480;
            background.x = (background.width) * i;
            this.backgrounds.push(background);
        }
        this.bird = new Bird(this.game, 75, 100);
        for ( let i = 0; i < 10; i++ ) {
            const heightVariation = (Math.random() * (100 + 100) - 100);

            const floorTube = new Tube(this.game, 600 + i * 600, 615 + heightVariation + 50, false );
            this.floorTubesArray.push ( floorTube );

            const ceilingTube = new Tube(this.game, 600 + i * 600, 615 + heightVariation, true);
            this.ceilingTubesArray.push ( ceilingTube );
        }
        this.button = this.game.add.sprite(400, 30, "button");
        this.button.scale.setTo(0.4);
        this.button.inputEnabled = true;
        this.score = this.game.add.bitmapText(200, 30, "font", "Score: ", 35);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceKey.onDown.add(() => {
            this.speedY = -5;
        }, this);
        this.escKey = this.input.keyboard.addKey(Phaser.Keyboard.ESC);
    }

    public update() {
        if (this.pausecond === 0) {
            this.escKey.onDown.add(() => {
                this.pausecond = 1;
            }, this);
            this.button.events.onInputDown.add(() => {
                this.pausecond = 1;
            }, this);
        this.speedY += this.gravity;
        this.bird.y += this.speedY;
        this.bird.angle = this.speedY * 5;

        for ( let i = 0; i < this.floorTubesArray.length; i++ ) {
            this.floorTubesArray[i].moveLeft();
            this.ceilingTubesArray[i].moveLeft();
        }

        this.backgrounds.forEach(element => {
            element.x -= 1;
            if ( element.x + element.width < 0 ) {
                element.x += element.width * 2;
            }
        });
        if (this.floorTubesArray[this.scoreValue]) {
            if (this.floorTubesArray[this.scoreValue].x === this.bird.x) {
                this.scoreValue++;
                this.score.text = "Score: " + (this.scoreValue);

            }
            if (this.floorTubesArray[this.scoreValue]) {
                const currentFloorTube: Tube = this.floorTubesArray[this.scoreValue];
                const currentCeilingTube: Tube = this.ceilingTubesArray[this.scoreValue];

                const c1 = currentFloorTube.intersectsPoint(this.bird.x, this.bird.y);
                const c2 = currentCeilingTube.intersectsPoint(this.bird.x, this.bird.y);
                const c3 = !this.bird.isInsideScreen();

                if ( c1 || c2 || c3 ) {
                    this.collision++;
                }

            }
        }
        }
        if (this.collision !== 0) {
            this.game.state.start("GameOver");
        }
        if (this.pausecond === 1) {
            this.escKey.onDown.add(() => {
                this.pausecond = 0;
            }, this);
            this.button.events.onInputDown.add(() => {
                this.pausecond = 0;
            }, this);
        }
    }


}