class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene1" });
  }

  preload() {
    this.load.image("smile", "assets/smile.jpg");
  }

  create() {
    this.image = this.add.image(400, 300, "smile");

    // keyboard click movement
    // this approach jumps the object, only moves once per key press
    this.input.keyboard.on(
      "keyup_D",
      function (event) {
        this.image.x += 10;
      },
      this
    );

    // this approach fires everytime the key is down, so gradual
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    // mouse handle
    // when mouse is clicked the image coordinates move to position of mouse
    this.input.on(
      "pointerdown",
      function (event) {
        this.image.x = event.x;
        this.image.y = event.y;
      },
      this
    );

    this.input.keyboard.on(
      "keyup_P",
      function (event) {
        var physicsImage = this.physics.add.image(
          this.image.x,
          this.image.y,
          "smile"
        );
        //give random velocity between -100 and 100
        physicsImage.setVelocity(
          Phaser.Math.RND.integerInRange(-100, 100),
          -300
        );
      },
      this
    );

    // when you press 2 switches to scene 2
    this.input.keyboard.on(
      "keyup",
      function (event) {
        if (event.key == "2") {
          this.scene.start("Scene2");
        }
        if (event.key == "3") {
          this.scene.start("Scene3");
        }
      },
      this
    );
  }

  update(delta) {
    if (this.key_A.isDown) {
      this.image.x--;
    }
  }
}
