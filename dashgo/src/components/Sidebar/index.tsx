import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">

        <NavSection title="GERAL">
          <Link display="flex" alignItems="center">
            <Icon as={RiDashboardLine} fontSize="20"/>
            <Text fontWeight="medium" ml="4">Dashboard</Text>
          </Link>
          <Link display="flex" alignItems="center">
            <Icon as={RiContactsLine} fontSize="20"/>
            <Text fontWeight="medium" ml="4">Usuários</Text>
          </Link>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
        <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20"/>
              <Text fontWeight="medium" ml="4">Formulários</Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20"/>
              <Text fontWeight="medium" ml="4">Automação</Text>
            </Link>
        </NavSection>  
                
      </Stack>
    </Box>
  )
}