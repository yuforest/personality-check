import { Button, Center, Container } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import personalityTypes from 'data/personality_types'
import './Result.scss'

const Result = (props: any) => {
  const history = useHistory()
  useEffect(() => {
    if (props.location.state === undefined) {
      history.push('/')
    }
  }, [props, history])

  let result = {
    name: '',
    description: '',
  }
  if (props.location !== undefined) {
    result = personalityTypes[props.location.state.type]
  }

  const handleClick = () => {
    history.push('/')
  }
  return (
    <Container>
      <Center mt="5" fontSize="xl" fontWeight="bold" color="teal.500">
        あなたの特性: {result.name}
      </Center>
      <Center mt="3" className="white-space">
        {result.description}
      </Center>
      <Center mt="3">
        <Button onClick={handleClick} colorScheme="teal">
          トップに戻る
        </Button>
      </Center>
    </Container>
  )
}

export default Result
