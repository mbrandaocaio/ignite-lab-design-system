import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { Logo } from "../../Logo";
import axios from 'axios'

export function Login() {

    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        await axios.post('/sessions', {
            email: 'mbrandao.caio@gmail.com',
            password: 'batata12'
        })

        setIsUserSignedIn(true)
    }

    return (
        <div className='w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col'>

            <header className='flex flex-col items-center'>
                <Logo />

                <Heading size='lg'>Ignite Lab</Heading>

                <Text size='lg' className='text-gray-400 mt-1'>
                    Faça login e comece a usar
                </Text>

            </header>

            <form onSubmit={handleLogin} className='flex flex-col items-stretch mt-10 gap-4 w-full max-w-sm'>

                {isUserSignedIn && <Text>Login realizado</Text>}

                <label htmlFor="email" className='font-semibold flex flex-col gap-3'>
                    <Text size='md' >Endereço de email</Text>

                    <Input.Root>
                        <Input.Icon><Envelope /></Input.Icon>
                        <Input.Input id='email' placeholder="Digite seu email" />
                    </Input.Root>
                </label>

                <label htmlFor="password" className='flex flex-col gap-3'>
                    <Text size='md' className='font-semibold' >Sua senha</Text>

                    <Input.Root>
                        <Input.Icon><Lock /></Input.Icon>
                        <Input.Input id='password' type="password" placeholder="*********" />
                    </Input.Root>
                </label>

                <label htmlFor="remember" className='flex items-center gap-2'>
                    <Checkbox id='remember' />
                    <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
                </label>

                <Button type='submit' className='mt-4'>Entrar na plataforma</Button>

            </form>

            <footer className='flex flex-col items-center gap-4 mt-8'>
                <Text size='sm' asChild>
                    <a href="" className='text-gray-400 underline hover:text-gray-200 '>Esqueceu sua senha?</a>
                </Text>
                <Text size='sm' asChild>
                    <a href="" className='text-gray-400 underline hover:text-gray-200 '>Não possui conta? Crie uma agora!</a>
                </Text>
            </footer>
        </div>
    )
}