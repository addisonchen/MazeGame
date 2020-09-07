class Scene2 extends Phaser.Scene {
  constructor() {
    super({ key: "playGame" });
  }

  preload() {
    this.load.image("square", "assets/pinkSquare.jpg");
    this.load.audio("shoot", ["assets/gunNoise.mp3"]);
  }

  create() {
    this.soundShoot = this.sound.add("shoot");
    this.image = this.add.image(400, 300, "square");

    // this approach fires everytime the key is down, so gradual
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    this.key_LEFT = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT
    );
    this.key_RIGHT = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );
    this.key_UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.key_DOWN = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.DOWN
    );

    //makes the shooting noise every time the space key is pressed
    this.input.keyboard.on(
      "keydown_SPACE",
      function (event) {
        this.soundShoot.play();
      },
      this
    );
  }

  update(delta) {
    if (this.key_A.isDown || this.key_LEFT.isDown) {
      this.image.x -= 3;
    }
    if (this.key_S.isDown || this.key_DOWN.isDown) {
      this.image.y += 3;
    }
    if (this.key_W.isDown || this.key_UP.isDown) {
      this.image.y -= 3;
    }
    if (this.key_D.isDown || this.key_RIGHT.isDown) {
      this.image.x += 3;
    }
  }
}
