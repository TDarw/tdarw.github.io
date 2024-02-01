export default class Text {
  constructor(scene, x, y) {
    this.scene = scene;

    const text = this.add.rectangle(340, 200, 590, 320, 0x000000);
  }
}
