class Scene2 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene2" });
  }

  create() {
    this.text = this.add.text(0, 0, "Welcome", { font: "40px Impact" });

    this.key_scene = this.input.keyboard.on(
      "keyup",
      function (event) {
        if (event.key == "1") {
          this.scene.start("Scene1");
        }
        if (event.key == "3") {
          this.scene.start("Scene3");
        }
      },
      this
    );
  }
}
