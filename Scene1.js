class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: "loadGame" });
  }

  create() {
    this.welcome = this.add.text(450, 400, "WELCOME", { font: "40px Impact" });
    this.enterkey = this.add.text(450, 600, "press enter", {
      font: "40px Impact",
    });

    // when you press enter switches to scene 2
    this.input.keyboard.on(
      "keyup",
      function (event) {
        if (event.keyCode == 13) {
          this.scene.start("playGame");
        }
      },
      this
    );
  }
}
