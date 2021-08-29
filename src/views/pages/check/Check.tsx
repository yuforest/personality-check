import { Button, Center, Container, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { Stepper } from 'react-form-stepper'
import { useHistory } from 'react-router'
import Question from 'views/components/question/Question'
import QuestionType from 'types/question'
import questions from 'data/questions'

const Check = () => {
  const history = useHistory()
  const questionPerStep = 5
  const maxStep = Math.ceil(questions.length / questionPerStep)
  const next = () => {
    if (maxStep <= step) return
    setStep(step + 1)
  }
  const back = () => {
    if (1 >= step) return
    setStep(step - 1)
  }

  const steps = [...Array(maxStep)].map((_, i) => {
    return { label: `Step ${i + 1}` }
  })

  const canNext = () => {
    if (maxStep <= step) return false
    return true
  }
  const canBack = () => {
    if (1 >= step) return false
    return true
  }
  const isCurrentQuestion = (question: QuestionType) => {
    const start = questionPerStep * (step - 1) + 1
    const end = start + questionPerStep - 1
    return question.id >= start && question.id <= end
  }

  const submit = () => {
    setLoading(true)
    setTimeout(() => history.push('/result'), 5000)
  }
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  type Answers = {
    [key: number]: string
  }
  let initialAnswers: Answers = {}
  for (let i = 1; i <= questions.length; i++) {
    initialAnswers[i] = '3'
  }
  const [answers, setAnswers] = useState(initialAnswers)

  const styleConfig = {
    completedBgColor: '#005731',
    completedTextColor: '#ffffff',
    activeBgColor: '#6bd391',
    activeTextColor: '#ffffff',
    inactiveBgColor: '#e0e0e0',
    inactiveTextColor: '#ffffff',
    labelFontSize: '0.875rem',
    size: '2em',
    circleFontSize: '1rem',
    borderRadius: '50%',
    fontWeight: 500,
  }
  return (
    <Container mt="10" spacing={4}>
      <Stepper styleConfig={styleConfig} activeStep={step - 1} steps={steps} />

      {questions.filter(isCurrentQuestion).map((question) => {
        return (
          <Question
            key={question.id}
            question={question}
            setAnswers={setAnswers}
            answers={answers}
          ></Question>
        )
      })}
      <Flex justify="space-between" mt="5">
        <Button colorScheme="gray" onClick={back} isDisabled={!canBack()}>
          前へ
        </Button>
        <Button colorScheme="blue" onClick={next} isDisabled={!canNext()}>
          次へ
        </Button>
      </Flex>
      {maxStep === step && (
        <Center mt="5">
          <Button
            isLoading={loading}
            loadingText="判定中"
            colorScheme="teal"
            size="lg"
            onClick={submit}
            spinnerPlacement="start"
          >
            判定する
          </Button>
        </Center>
      )}
    </Container>
  )
}

export default Check
