import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/cartBuy.png'
import Person from '../../assets/userlogo.png'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  Line,
  PageLinkExit
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isactive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => navigate('/carrinho')}>
          <img src={Cart} alt="Carrinho de compras logo" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="avatar usuário" />
        </PageLink>
        <ContainerText>
          <p> Olá {userData.name}!</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
