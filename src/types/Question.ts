import { QuestionType } from "./enums";

export type Option = {
  id: string;
  value: string;
};

export type SingleChoiceQuestion = {
  type: QuestionType.SingleChoice;
  options: Option[];
};

export type MultipleChoiceQuestion = {
  type: QuestionType.MultipleChoice;
  options: Option[];
};

export type OpenEndedQuestion = {
  type: QuestionType.ShortResponse | QuestionType.DetailedResponse;
};

export type Question = {
  id: string;
  title: string;
} & (SingleChoiceQuestion | MultipleChoiceQuestion | OpenEndedQuestion);
