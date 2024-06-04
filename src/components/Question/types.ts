import { InferType } from "yup";

import { openEndedAnswerSchema } from "./schema";

export type OpenEndedProps = {
  defaultValue?: string;

  onAnswer: (data: OpenEndedAnswer) => void;
};

export type OpenEndedAnswer = InferType<typeof openEndedAnswerSchema>;
