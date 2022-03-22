import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/form/Input'

type SignInFormData = {
  email: string,
  password: string
}

export default function SignIn() {
  const { register, handleSubmit, formState, errors } = useForm()

  const handleSign: SubmitHandler<SignInFormData> = (values, event) => {

  }

  return (
    <Flex 
      w="100vw" 
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex 
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSign)}
      >

        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" ref={register} />
          <Input name="password" label="Senha" type="password" ref={register} />              
        </Stack>

        <Button 
          type="submit" 
          mt="6"
          colorScheme="pink"          
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
