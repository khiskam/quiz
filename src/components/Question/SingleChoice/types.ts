import { InferType } from "yup";

import { SingleChoiceQuestion } from "@/types";

import { schema } from "./schema";

export type SingleChoiceAnswer = InferType<typeof schema>;

export type SingleChoiceProps = {
  options: SingleChoiceQuestion["options"];
  defaultValue?: string;

  onAnswer: (data: SingleChoiceAnswer) => void;
};
