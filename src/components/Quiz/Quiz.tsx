import { Alert, Container, Flex, Grid, Heading } from "@chakra-ui/react";

import { Progress, Timer } from "@/components";
import { Facade } from "@/components/Question";

import { data } from "./data";
import { useQuiz } from "./hooks";

export const Quiz = () => {
  const { currentStep, solved, goToNthPage, onFinish, onAnswer, stopTimer } =
    useQuiz(data);

  return (
    <Container maxW="container.lg" minH="100vh">
      <Grid as="section" minH="100vh" alignContent="center" gap={8}>
        <Flex gap={4} flexWrap="wrap" align="center">
          <Heading as="h2" size="lg">
            Тестирование
          </Heading>

          {data.duration && (
            <Timer
              initDuration={data.duration}
              onFinish={onFinish}
              stop={stopTimer}
            />
          )}
        </Flex>

        {currentStep === data.questions.length ? (
          <Alert status="info" borderRadius={4}>
            Время вышло. Тест пройден.
          </Alert>
        ) : (
          <>
            <Progress
              total={data.questions.length}
              current={currentStep}
              done={solved.length}
              onPage={goToNthPage}
            />
            <Facade
              onAnswer={onAnswer}
              solved={solved}
              question={data.questions[currentStep]}
            />
          </>
        )}
      </Grid>
    </Container>
  );
};
