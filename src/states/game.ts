import { Tube } from "../prefabs/tube";

export class Game extends Phaser.State {
    public create(): void {
        const bird = this.game.add.sprite(50, 150, "bird");
        const tube = new Tube(this.game, 300, 600);
    }
}