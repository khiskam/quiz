import { InferType } from "yup";

import { MultipleChoiceQuestion } from "@/types";

import { schema } from "./schema";
export type MultipleChoiceAnswer = InferType<typeof schema>;

export type MultipleChoiceProps = {
  options: MultipleChoiceQuestion["options"];
  defaultValue?: string[];

  onAnswer: (data: MultipleChoiceAnswer) => void;
};
