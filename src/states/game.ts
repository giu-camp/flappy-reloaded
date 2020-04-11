import { Tube } from "../prefabs/tube";

export class Game extends Phaser.State {

    private bird;
    private tube;
    private spaceKey: Phaser.Key;
    private speedY = 0;
    private gravity = 0.1;

    public create(): void {
        this.bird = this.game.add.sprite(75, 100, "bird");
        this.bird.anchor.setTo(0.5);

        this.tube = new Tube(this.game, 600, 600);

        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceKey.onDown.add(() => {
            this.speedY = -5;
        }, this);
    }

    public update() {
        this.speedY += this.gravity;
        this.bird.y += this.speedY;

        this.bird.angle = this.speedY * 5;

        this.tube.x -= 10;
    }


}