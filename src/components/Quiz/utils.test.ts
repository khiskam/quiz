import { Answer, QuestionType } from "@/types";

import { addAnswer } from "./utils";

const data: Answer[] = [
  {
    questionId: "1",
    type: QuestionType.SingleChoice,
    value: "1",
  },
  {
    questionId: "2",
    type: QuestionType.SingleChoice,
    value: "2",
  },
  {
    questionId: "2",
    type: QuestionType.SingleChoice,
    value: "3",
  },
  {
    questionId: "3",
    type: QuestionType.SingleChoice,
    value: "2",
  },
  {
    questionId: "3",
    type: QuestionType.MultipleChoice,
    value: ["1", "2"],
  },
];

describe("addAnswer func", () => {
  it("should add new elements", () => {
    let init: Answer[] = [];

    const expected: Answer[] = [data[0], data[1]];

    expected.forEach((value) => {
      init = addAnswer(init, value);
    });

    expect(init).toHaveLength(expected.length);
    expect(init).toIncludeSameMembers(expected);
  });

  it("should replace element", () => {
    let init: Answer[] = [data[0], data[1]];

    const expected: Answer[] = [data[0], data[2]];

    init = addAnswer(init, data[2]);

    expect(init).toHaveLength(expected.length);
    expect(init).toIncludeSameMembers(expected);
  });

  it("should throw error", () => {
    const init: Answer[] = [data[0], data[3]];

    expect(() => addAnswer(init, data[4])).toThrow(Error);
  });
});
