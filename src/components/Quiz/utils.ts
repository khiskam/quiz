import { Answer } from "@/types";

const QUIZ_ANSWERS = "quizAnswers";

export const loadQuizAnswers = (): Answer[] | undefined => {
  const data = localStorage.getItem(QUIZ_ANSWERS);

  if (!data) {
    return;
  }

  return JSON.parse(data);
};

export const saveQuizAnswers = (answers: Answer[]) => {
  const data: Answer[] = answers;
  localStorage.setItem(QUIZ_ANSWERS, JSON.stringify(data));
};

export const addAnswer = (prev: Answer[], answer: Answer) => {
  const idx = prev.findIndex((value) => value.questionId === answer.questionId);

  if (idx === -1) {
    return [...prev, answer];
  }

  if (prev[idx].type !== answer.type) {
    throw new Error("question and answer types are not equal");
  }

  return prev.map((value, i) => (i === idx ? answer : value));
};
