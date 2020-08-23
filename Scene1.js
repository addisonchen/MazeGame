class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene1" });
  }

  preload() {
    this.load.image("smile", "assets/smile.jpg");
  }

  create() {
    this.image = this.add.image(400, 300, "smile");

    // keyboard clicks
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
  }

  update(delta) {
    if (this.key_A.isDown) {
      this.image.x--;
    }
  }
}
