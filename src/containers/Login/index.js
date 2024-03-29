import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/loginimg.svg'
import Logo from '../../assets/logo.svg'
import { Button, ErrorMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles'

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido!')
      .required('O email é obrigatório!'),
    password: Yup.string()
      .required('A senha é obrigatória!')
      .min(6, 'A senha deve ter pelo menos 6 caracteres!')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status, data } = await api.post(
        'sessions',
        {
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Seja bem Vindo(a)!')
      } else if (status === 401) {
        toast.error('Verifique seu email e senha!')
      } else {
        throw new Error()
      }

      setTimeout(() => {
        if (data.admin) {
          navigate('/pedidos')
        } else {
          navigate('/')
        }
      }, 1000)

      putUserData(data)
    } catch (err) {
      toast.error('Falha no sistema, tente novamente!')
    }
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login img" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type="submit" style={{ marginTop: 66, marginBottom: 28 }}>
            Sign in
          </Button>
        </form>
        <SignInLink>
          Não possui conta?{' '}
          <Link to="/cadastro" style={{ color: 'white' }}>
            Sign Up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
