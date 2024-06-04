import { Answer, Question } from "@/types";

export type FacadeProps = {
  question: Question;
  solved: Answer[];
  onAnswer: (data: Answer) => void;
};
