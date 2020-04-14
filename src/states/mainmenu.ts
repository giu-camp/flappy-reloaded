export class MainMenu extends Phaser.State {

    public create(): void {
        const button = this.game.add.sprite(75, 100, "button");

        button.inputEnabled = true;
        button.events.onInputDown.add(this.listener, this);
    }

    private listener() {
        this.game.state.start("Game");
    }

}