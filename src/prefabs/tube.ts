export class Tube extends Phaser.Sprite {
    private speed = 5;
    constructor(game: Phaser.Game, x: number, y: number, isCeilingTube: boolean) {
        super(game, x, y, "tube");

        this.anchor.setTo(0.5);
        this.game.physics.arcade.enableBody(this);

        game.add.existing(this);

        if ( isCeilingTube ){
            this.setToCeilingTube();
        }

        // this.checkWorldBounds = true;
        // this.body.collideWorldBounds = true;
    }

    private setToCeilingTube() {
        this.angle = 180;
        this.y -= 750;
    }

    public intersectsPoint(birdX: number, birdY: number): boolean {
        let TubeStart = ((this.x - 135 ) < birdX);
        let TubeEnd = (birdX < (this.x  + 135 ));
        let TubePeak = ((this.y - 331) < birdY);
        let TubeBottom = (birdY < (this.y + 331));

        if (TubeStart && TubeEnd && TubePeak && TubeBottom) {
            return true;
        }

        return false;
    }

    public moveLeft() {
        this.x -= this.speed;
    }

    update() {
        // this.angle += 1;
    }
}