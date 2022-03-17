import { Icon, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

import { NavSection } from "./NavSection";

import { ActiveLink } from "../ActiveLink";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <ActiveLink href="/dashboard" passHref>
          <ChakraLink display="flex" alignItems="center">
            <Icon as={RiDashboardLine} fontSize="20"/>
            <Text fontWeight="medium" ml="4">Dashboard</Text>
          </ChakraLink>
        </ActiveLink>
        <ActiveLink href="/users" passHref>
          <ChakraLink display="flex" alignItems="center">
            <Icon as={RiContactsLine} fontSize="20"/>
            <Text fontWeight="medium" ml="4">Usuários</Text>
          </ChakraLink>
        </ActiveLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <ActiveLink href="/forms" passHref>
          <ChakraLink display="flex" alignItems="center">
            <Icon as={RiInputMethodLine} fontSize="20"/>
            <Text fontWeight="medium" ml="4">Formulários</Text>
          </ChakraLink>
        </ActiveLink>
        <ActiveLink href="/automation" passHref>
          <ChakraLink display="flex" alignItems="center">
            <Icon as={RiGitMergeLine} fontSize="20"/>
            <Text fontWeight="medium" ml="4">Automação</Text>
          </ChakraLink>
        </ActiveLink>
      </NavSection>                
    </Stack>
  )
}