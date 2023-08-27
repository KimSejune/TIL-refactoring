export class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses.slice();
  }

  // addCourse, removeCourse 사용하여 대체
  // 불필요하여 제거
  // set courses(aList) {
  //   this._courses = aList;
  // }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === 1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}
