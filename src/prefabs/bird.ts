export class Bird extends Phaser.Sprite {
    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "bird");
        this.anchor.setTo(0.5);
        this.scale.setTo(0.65);
        game.add.existing(this);
    }

    public isInsideScreen(): boolean {
        let topOfFrame = (this.y > 0);
        let bottomOfFrame = (this.y < 480);
        if (topOfFrame && bottomOfFrame) {
            return true;
        }
        return false;
    }
}