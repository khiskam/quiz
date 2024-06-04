import { FormLabel, Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import { Form } from "@/components";

import { openEndedAnswerSchema } from "../schema";
import { OpenEndedAnswer, OpenEndedProps } from "../types";

export const ShortResponse = ({ onAnswer, defaultValue }: OpenEndedProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OpenEndedAnswer>({
    resolver: yupResolver(openEndedAnswerSchema),
    defaultValues: { answer: defaultValue ?? "" },
  });

  return (
    <Form onSubmit={handleSubmit(onAnswer)} error={errors.answer?.message}>
      <Controller
        control={control}
        name="answer"
        render={({ field }) => (
          <>
            <FormLabel m={0}>Ответ</FormLabel>
            <Input type="text" placeholder="Введите ответ" {...field} />
          </>
        )}
      />
    </Form>
  );
};
