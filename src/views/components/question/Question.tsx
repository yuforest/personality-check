import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react'

const Question = ({
  question,
  setAnswers,
  answers,
}: {
  question: any
  setAnswers: Function
  answers: any
}) => {
  const setAnswer = (value: string) => {
    const newAnswers = answers
    newAnswers[question.id] = value
    setAnswers(newAnswers)
  }
  return (
    <Box mt="7" key={question.id}>
      <Box fontWeight="bold">
        {question.id}: {question.content}
      </Box>
      <RadioGroup
        onChange={setAnswer}
        colorScheme="green"
        defaultValue="3"
        mt="4"
        size="md"
      >
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
}

export default Question
