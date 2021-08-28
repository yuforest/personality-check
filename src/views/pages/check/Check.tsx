import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'

import { Stepper } from 'react-form-stepper'
import { useHistory } from 'react-router'

interface Question {
  id: number
  content: string
}

const Check = () => {
  const history = useHistory()
  const questions: Question[] = [
    {
      id: 1,
      content: '自分は涙もろい人間だと思う',
    },
    {
      id: 2,
      content: '自分は涙もろい人間だと思う',
    },
    {
      id: 3,
      content: '自分は涙もろい人間だと思う',
    },
    {
      id: 4,
      content: '自分は涙もろい人間だと思う',
    },
    {
      id: 5,
      content: '自分は涙もろい人間だと思う',
    },
    {
      id: 6,
      content: '自分は涙もろい人間だと思う',
    },
    {
      id: 7,
      content: '自分は涙もろい人間だと思う',
    },
    {
      id: 8,
      content: '自分は涙もろい人間だと思う',
    },
    {
      id: 9,
      content: '自分は涙もろい人間だと思う',
    },
    {
      id: 10,
      content: '自分は涙もろい人間だと思う',
    },
    {
      id: 11,
      content: '自分は涙もろい人間だと思う',
    },
    {
      id: 12,
      content: '自分は涙もろい人間だと思う',
    },
  ]
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
  const isCurrentQuestion = (question: Question) => {
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
          <Box mt="7" key={question.id}>
            <Box fontWeight="bold">
              {question.id}: {question.content}
            </Box>
            <RadioGroup colorScheme="green" defaultValue="3" mt="4" size="md">
              <Stack spacing={3} direction="row">
                <Radio value="1">全くあてはまらない</Radio>
                <Radio value="2">あまりあてはまらない</Radio>
                <Radio value="3">どちらとも言えない</Radio>
                <Radio value="4">少しあてはまる</Radio>
                <Radio value="5">とてもあてはまる</Radio>
              </Stack>
            </RadioGroup>
          </Box>
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
