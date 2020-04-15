export class GameOver extends Phaser.State {
    private retry;
    private mainmenu;

    public create(): void {
        this.retry = this.game.add.bitmapText(75, 60, "font", "Retry ", 35);
        this.mainmenu = this.game.add.bitmapText(75, 260, "font", "Main Menu ", 35);
        const button1 = this.game.add.sprite(75, 100, "button");

        button1.inputEnabled = true;
        button1.events.onInputDown.add(this.Retry, this);



        const button2 = this.game.add.sprite(75, 300, "button");

        button2.inputEnabled = true;
        button2.events.onInputDown.add(this.MainMenu, this);
    }

    private MainMenu() {
        this.game.state.start("MainMenu");
    }
    private Retry() {
        this.game.state.start("Game");
    }

}