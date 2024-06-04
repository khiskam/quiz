import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import { Form } from "@/components";

import { schema } from "./schema";
import { MultipleChoiceAnswer, MultipleChoiceProps } from "./types";

export const MultipleChoice = ({
  onAnswer,
  options,
  defaultValue,
}: MultipleChoiceProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MultipleChoiceAnswer>({
    resolver: yupResolver(schema),
    defaultValues: { answer: defaultValue },
  });

  return (
    <Form onSubmit={handleSubmit(onAnswer)} error={errors.answer?.message}>
      <Controller
        control={control}
        name="answer"
        render={({ field: { onChange, value } }) => (
          <CheckboxGroup colorScheme="red" onChange={onChange} value={value}>
            <Stack spacing={1} direction="column">
              {options.map((input) => (
                <Checkbox value={input.id} key={input.id} id={input.id}>
                  {input.value}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        )}
      />
    </Form>
  );
};
