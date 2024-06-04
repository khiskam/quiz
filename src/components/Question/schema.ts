import { object, string } from "yup";

export const openEndedAnswerSchema = object({
  answer: string().required("Пожалуйста, заполните поле ответа"),
});
