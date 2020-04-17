export class WinState extends Phaser.State {

    public create(): void {
        this.game.add.bitmapText(20, 30, "font", "Congratulations, you have\nfinished the game!", 40);
        const button = this.game.add.sprite(75, 300, "button");

        button.inputEnabled = true;
        button.events.onInputDown.add(this.listener, this);
    }

    private listener() {
        this.game.state.start("Game");
    }

}