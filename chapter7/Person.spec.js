import { Person } from "./Person.js";
import * as assert from "assert";
import { Course } from "./Course.js";
import _ from "lodash";

const dummuyBasicCourseNames = [
  "C",
  "C#",
  "Java",
  "JavaScript",
  "C++",
  "Python",
  "Go",
];

describe("Person course test", () => {
  let aPerson;

  beforeEach(() => {
    aPerson = new Person("Sejune");
  });

  it("map을 통하여 직접 Course를 추가하는 방법", () => {
    // given
    const basicCourseNames = _.cloneDeep(dummuyBasicCourseNames);

    // when
    aPerson.courses = basicCourseNames.map((name) => new Course(name, false));

    // then
    const courseName = aPerson.courses.map((course) => course.name);
    assert.deepEqual(courseName, basicCourseNames);
  });

  it("for of 통하여 직접 Course를 추가하는 방법", () => {
    // given
    const basicCourseNames = _.cloneDeep(dummuyBasicCourseNames);

    // when
    for (const name of basicCourseNames) {
      aPerson.courses.push(new Course(name, false));
    }

    // then
    const courseName = aPerson.courses.map((course) => course.name);
    assert.deepEqual(courseName, basicCourseNames);
  });

  it("Person 내부의 addCourse 통해 Course 추가하는 방법", () => {
    // given
    const basicCourseNames = _.cloneDeep(dummuyBasicCourseNames);

    // when
    for (const name of basicCourseNames) {
      aPerson.addCourse(new Course(name, false));
    }

    // then
    const courseName = aPerson.courses.map((course) => course.name);
    assert.deepEqual(courseName, basicCourseNames);
  });
});
