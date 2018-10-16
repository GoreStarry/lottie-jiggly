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
      this._playSinging();
    });
  }

  _playEyeBlink() {
    this.anim.playSegments([0, 104], true);
  }

  _playSinging() {
    this.anim.addEventListener("loopComplete", () => {
      this._playAngry();
    });
    this.anim.playSegments([[105, 522], [328, 522]], true);
  }

  _playAngry() {
    this.anim.removeEventListener("loopComplete", this._playAngry);
    this.anim.addEventListener("loopComplete", () => {
      this._onComplete();
    });
    this.anim.playSegments([522, 870], true);
  }

  _onComplete() {
    this.anim.pause();
    this.anim.removeEventListener("loopComplete", this._onComplete);
    this._playEyeBlink();
  }
}

new AnimateJiggly();
