import { object, string } from "yup";

export const schema = object({
  answer: string().required("Пожалуйста, выберите один вариант ответа"),
});
