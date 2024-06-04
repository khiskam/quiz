import { Answer, Question } from "@/types";

export type QuizOptions = {
  duration?: number;
  questions: Question[];
};

export type QuizData = {
  result: boolean;
  answers: Answer[];
};
