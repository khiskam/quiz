import { QuestionType } from "@/types";

import { DetailedResponse } from "../DetailedResponse";
import { MultipleChoice, MultipleChoiceProps } from "../MultipleChoice";
import { ShortResponse } from "../ShortResponse";
import { SingleChoice, SingleChoiceProps } from "../SingleChoice";
import { OpenEndedProps } from "../types";
import { FacadeProps } from "./types";

export const useFacade = ({ solved, question, onAnswer }: FacadeProps) => {
  const answer = solved.find((item) => item.questionId === question.id);

  if (question.type === QuestionType.SingleChoice) {
    const handleAnswer: SingleChoiceProps["onAnswer"] = (data) => {
      onAnswer({
        questionId: question.id,
        type: QuestionType.SingleChoice,
        value: data.answer,
      });
    };

    const defaultValue =
      answer?.type === QuestionType.SingleChoice ? answer.value : undefined;

    return (
      <SingleChoice
        onAnswer={handleAnswer}
        defaultValue={defaultValue}
        options={question.options}
      />
    );
  } else if (question.type === QuestionType.MultipleChoice) {
    const handleAnswer: MultipleChoiceProps["onAnswer"] = (data) => {
      onAnswer({
        questionId: question.id,
        type: QuestionType.MultipleChoice,
        value: data.answer,
      });
    };

    const defaultValue =
      answer?.type === QuestionType.MultipleChoice ? answer.value : undefined;

    return (
      <MultipleChoice
        onAnswer={handleAnswer}
        defaultValue={defaultValue}
        options={question.options}
      />
    );
  } else if (question.type === QuestionType.ShortResponse) {
    const handleAnswer: OpenEndedProps["onAnswer"] = (data) => {
      onAnswer({
        questionId: question.id,
        type: QuestionType.ShortResponse,
        value: data.answer,
      });
    };

    const defaultValue =
      answer?.type === QuestionType.ShortResponse ? answer.value : undefined;

    return (
      <ShortResponse onAnswer={handleAnswer} defaultValue={defaultValue} />
    );
  } else {
    const handleAnswer: OpenEndedProps["onAnswer"] = (data) => {
      onAnswer({
        questionId: question.id,
        type: QuestionType.DetailedResponse,
        value: data.answer,
      });
    };

    const defaultValue =
      answer?.type === QuestionType.DetailedResponse ? answer.value : undefined;

    return (
      <DetailedResponse onAnswer={handleAnswer} defaultValue={defaultValue} />
    );
  }
};
