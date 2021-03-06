import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useQuery } from 'react-query'

export default function UserList() {

  const query = useQuery('users', async () => {
    const response = await fetch('https://localhost:3000/mirage/users')
    const data = await response.json()

    return data
  })

  console.log(query)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button as="a" size="sm" fontSize="sl" colorScheme="pink" leftIcon={ <Icon as={ RiAddLine } fontSize="20"/> }>
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th>}
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Joao Hugo</Text>
                    <Text fontSize="small" color="gray.300">joaohugo@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 mar 2022</Td>}
                <Td>
                  { isWideVersion && (
                    <Button 
                      as="a"
                      size="sm" 
                      fontSize="16" 
                      colorScheme="purple" 
                      leftIcon={ <Icon as={ RiPencilLine }/> }>
                      Editar
                    </Button>
                  )}
                  
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}