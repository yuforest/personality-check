import { Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Flex bg="green.300" justify="space-between">
      <Box color="white" fontWeight="bold" fontSize="lg" p="4">
        <Link to="/">Personality Check</Link>
      </Box>
      <Flex justify="flex-end">
        <Box p="4" fontWeight="bold" color="white">
          <Link to="/check">Check</Link>
        </Box>
        <Box p="4" fontWeight="bold" color="white">
          <Link to="/result">Result</Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
