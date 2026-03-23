const ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    if (this.step < 0) this.step = 0;
    return this;
  },

  showStep() {
    console.log(this.step);
    return this;
  }

};

ladder.up().up().down().showStep();