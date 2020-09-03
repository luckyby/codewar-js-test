const sum = {
  all: {
    a: 0,
    b: 0,
  },
  calculate() {
    const result = this.all.a + this.all.b;
    console.log(result);

  },
  set a(param) {
    if (typeof param != 'number') {
      console.log("Only NUMBER!");
    } else {
      this.all.a = param;

    }
    this.calculate();
  },
  set b(param) {
    if (typeof param != 'number') {
      console.log("Only NUMBER!");
    } else {
      this.all.b = param;
    }
    this.calculate();
  }
}

sum.a = 3;