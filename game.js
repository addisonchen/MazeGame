var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 800,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 200,
      },
    },
  },
  scene: [Scene1, Scene2],
};

var game = new Phaser.Game(config);

