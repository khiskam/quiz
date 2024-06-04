import { useLayoutEffect, useState } from "react";

import { FacadeProps } from "@/components/Question";
import { Answer } from "@/types";

import { QuizOptions } from "./types";
import { addAnswer, loadQuizAnswers, saveQuizAnswers } from "./utils";

export const useQuiz = (data: QuizOptions) => {
  const [solved, setSolved] = useState<Answer[]>(() => loadQuizAnswers() ?? []);
  const [currentStep, setCurrentStep] = useState(() => solved.length ?? 0);

  useLayoutEffect(() => {
    saveQuizAnswers(solved);
    return () => saveQuizAnswers(solved);
  }, [solved, data]);

  const onAnswer: FacadeProps["onAnswer"] = (answer) => {
    setSolved((prev) => addAnswer(prev, answer));
    setCurrentStep((prev) => prev + 1);
  };

  const goToNthPage = (idx: number) => {
    setCurrentStep(idx);
  };

  const onFinish = () => {
    setCurrentStep(data.questions.length);
  };

  return {
    currentStep,
    solved,
    goToNthPage,
    initDuration: data?.duration,
    onAnswer,
    onFinish,
    stopTimer: solved.length === data.questions.length,
  };
};
