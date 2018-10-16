class AnimateJiggly {
  constructor() {
    this.anim = lottie.loadAnimation({
      container: document.getElementById("lottie"),
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "./lottie/data/body.json",
    });
    this._init();
  }

  _init() {
    this.anim.addEventListener("DOMLoaded", () => {
      this._handleClickMarkPen();
      this._playEyeBlink();
    });
  }

  _handleClickMarkPen() {
    document.querySelector("#markpen").addEventListener("click", () => {
      this._playSingingAndAngry();
    });
  }

  _playEyeBlink() {
    this.anim.playSegments([0, 104], true);
  }

  _playSingingAndAngry() {
    this.anim.addEventListener("loopComplete", () => {
      this._onLoopComplete();
    });
    this.anim.playSegments([105, 870], true);
  }

  _onLoopComplete() {
    this.anim.pause();
    this.anim.removeEventListener("loopComplete", this._onLoopComplete);
    this._playEyeBlink();
  }
}

new AnimateJiggly();
