import { QuestionType } from "./enums";

export type Answer = {
  questionId: string;
} & (
  | {
      type:
        | QuestionType.SingleChoice
        | QuestionType.ShortResponse
        | QuestionType.DetailedResponse;
      value: string;
    }
  | { type: QuestionType.MultipleChoice; value: string[] }
);
