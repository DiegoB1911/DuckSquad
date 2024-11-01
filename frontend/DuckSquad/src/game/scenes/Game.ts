import { Scene } from 'phaser';
import { EventBus } from '../EventBus';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');
        this.load.image('background', 'ui/background/bg.png');
        this.load.image('mountains', 'ui/Mountains.png');
        this.load.image('colonel', 'ui/ducks/Colonel2.png'); 
    }

    create ()
    {
        const background = this.add.image(this.scale.width / 2, this.scale.height / 2, 'background');
        background.setDisplaySize(this.scale.width, this.scale.height);

        const mountains = this.add.image(this.scale.width / 2, this.scale.height, 'mountains');
        mountains.setOrigin(0.5, 1);
        mountains.setDisplaySize(this.scale.width, mountains.height); 

        const colonel = this.add.image(this.scale.width * 0.10, this.scale.height - mountains.height + 180, 'colonel'); 
        colonel.setOrigin(0.5, 1);
        colonel.setScale(0.5);

        EventBus.emit('current-scene-ready', this);
    }
}
