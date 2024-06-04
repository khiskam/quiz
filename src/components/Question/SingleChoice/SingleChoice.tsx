import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import { Form } from "@/components";

import { schema } from "./schema";
import { SingleChoiceAnswer, SingleChoiceProps } from "./types";

export const SingleChoice = ({
  onAnswer,
  options,
  defaultValue,
}: SingleChoiceProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SingleChoiceAnswer>({
    resolver: yupResolver(schema),
    defaultValues: { answer: defaultValue },
  });

  return (
    <Form onSubmit={handleSubmit(onAnswer)} error={errors.answer?.message}>
      <Controller
        control={control}
        name="answer"
        render={({ field }) => (
          <RadioGroup colorScheme="red" {...field}>
            <Stack spacing={1} direction="column">
              {options.map((input) => (
                <Radio value={input.id} key={input.id}>
                  {input.value}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        )}
      />
    </Form>
  );
};
