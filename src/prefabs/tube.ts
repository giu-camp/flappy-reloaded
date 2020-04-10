export class Tube extends Phaser.Sprite {
    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "tube");

        this.anchor.setTo(0.5);
        this.game.physics.arcade.enableBody(this);

        game.add.existing(this);

        // this.checkWorldBounds = true;
        // this.body.collideWorldBounds = true;
    }

    update() {
        // this.angle += 1;
    }
}