import { Box, Center, Container } from '@chakra-ui/react'
import { VFC } from 'react'
import { Button } from '@chakra-ui/react'
import { useHistory } from 'react-router'
const Home: VFC = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/check')
  }
  return (
    <Container>
      <Box color="blue.700" mt="4">
        Personality Checkでは10の質問からあなたの性格を診断します。
        あまり考えずに5段階評価で答えてください。
      </Box>
      <Box color="blue.700" mt="4">
        質問の終了後診断結果が表示されます。
        それでは下のスタートボタンをクリックして始めてください。
      </Box>
      <Center mt="5">
        <Button colorScheme="blue" onClick={handleClick}>
          Start
        </Button>
      </Center>
    </Container>
  )
}

export default Home
