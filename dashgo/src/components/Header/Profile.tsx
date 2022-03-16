import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Joao Hugo</Text>
        <Text color="gray.300" fontSize="small">joaohugo@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Joao Hugo" src="https://github.com/hugoleda.png"/>
    </Flex>
  )
}