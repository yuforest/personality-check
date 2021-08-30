import { Box, Center } from '@chakra-ui/react'
import './Footer.scss'

const Footer = () => {
  return (
    <Center className="footer">
      <Box bg="gray" p="3" color="white" mt="4" w="100%">
        ©︎{new Date().getFullYear()} Personality Check All rights reserved.
      </Box>
    </Center>
  )
}

export default Footer
