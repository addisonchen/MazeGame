class Scene3 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene3" });
  }

  preload() {
    this.load.audio("test", ["assets/gunNoise.mp3"]);
  }

  create() {
    this.soundShoot = this.sound.add("test", { loop: "true" });

    //makes the shooting noise every time the L key is pressed
    this.input.keyboard.on(
      "keydown_L",
      function (event) {
        this.soundShoot.play();
      },
      this
    );
  }
}
