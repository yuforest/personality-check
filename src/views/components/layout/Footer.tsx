import { Center } from '@chakra-ui/react'
import './Footer.scss'

const Footer = () => {
  return (
    <Center bg="gray" h="80px" color="white" className="footer">
      ©︎{new Date().getFullYear()} Personality Check All rights reserved.
    </Center>
  )
}

export default Footer
