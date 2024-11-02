import { Scene } from 'phaser';
import { EventBus } from '../EventBus';

export class MainMenu extends Scene {
    constructor () {
        super('MainMenu');
    }

    preload () {
        this.load.setPath('assets');
        this.load.image('background', 'ui/background/bg.jpg');
        this.load.image('duckSquad', 'duckSquad.png');
        this.load.image('playButton', 'ui/playButton.png'); 
    }

    create () {
        const background = this.add.image(this.scale.width / 2, this.scale.height / 2, 'background');
        background.setDisplaySize(this.scale.width, this.scale.height);

        const duckSquad = this.add.image(this.scale.width / 2, this.scale.height / 2, 'duckSquad');
        duckSquad.setOrigin(0.5, 0.7);
        duckSquad.setDisplaySize(300, 350);

        this.tweens.add({
            targets: duckSquad,
            y: this.scale.height / 2 + 20, 
            duration: 1000, 
            ease: 'Sine.easeInOut', 
            yoyo: true, 
            repeat: -1 
        });

        const playButton = this.add.image(this.scale.width / 2, this.scale.height / 2 + 200, 'playButton');
        playButton.setOrigin(0.5, 0.5);
        playButton.setDisplaySize(150, 60); 
        playButton.setInteractive({ useHandCursor: true });

        this.tweens.add({
            targets: playButton,
            y: this.scale.height / 2 + 210, 
            duration: 1200, 
            ease: 'Sine.easeInOut', 
            yoyo: true, 
            repeat: -1 
        });

        playButton.on('pointerdown', this.startGame, this);

        EventBus.emit('current-scene-ready', this);
    }

    startGame() {
        this.scene.start('Game');
    }
}
