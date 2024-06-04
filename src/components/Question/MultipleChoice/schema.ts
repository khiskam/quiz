import { array, object, string } from "yup";

export const schema = object({
  answer: array()
    .of(string().required())
    .required("Пожалуйста, выберите минимум один вариант ответа"),
});
