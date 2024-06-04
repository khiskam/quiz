import { QuestionType } from "@/types";

import { QuizOptions } from "./types";

export const data: QuizOptions = {
  duration: 60,
  questions: [
    {
      id: "1",
      type: QuestionType.SingleChoice,
      title: "Столица РТ",
      options: [
        { id: "1", value: "Рязань" },
        { id: "2", value: "Казань" },
        { id: "3", value: "Омск" },
      ],
    },
    {
      id: "2",
      type: QuestionType.MultipleChoice,
      title: "Города в РТ",
      options: [
        { id: "1", value: "Казань" },
        { id: "2", value: "Москва" },
        { id: "3", value: "Елабуга" },
        { id: "4", value: "Иваново" },
      ],
    },
    {
      id: "3",
      type: QuestionType.ShortResponse,
      title: "Сколько будет 2+2?",
    },
    {
      id: "4",
      type: QuestionType.DetailedResponse,
      title: 'Напишите определение термину "Квадрат"',
    },
  ],
};
