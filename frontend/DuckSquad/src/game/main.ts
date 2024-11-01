import { MainMenu } from './scenes/MainMenu'; 
import { Game as GameScene } from './scenes/Game';
import { AUTO, Game, Types } from 'phaser';

const config: Types.Core.GameConfig = {
    type: AUTO,
    width: 1600,
    height: 740,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        MainMenu, 
        GameScene 
    ]
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;
