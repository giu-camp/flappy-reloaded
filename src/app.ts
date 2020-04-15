import "pixi";
import "p2";
import "phaser";

import {Config} from "./config";

import {Boot} from "./states/boot";
import {Preload} from "./states/preload";
import {Game} from "./states/game";
import { MainMenu } from "./states/mainmenu";
import {GameOver} from "./states/gameover";

class Template extends Phaser.Game {

    constructor() {
        super(Config.gameWidth, Config.gameHeight, Phaser.CANVAS, "content", null);

        this.state.add("Boot", Boot, false);
        this.state.add("Preload", Preload, false);
        this.state.add("MainMenu", MainMenu, false);
        this.state.add("Game", Game, false);
        this.state.add("GameOver", GameOver, false);

        this.state.start("Boot");
    }
}

window.onload = () => {
    new Template();
};