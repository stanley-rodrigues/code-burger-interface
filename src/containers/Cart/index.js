import React from 'react'

import CartLogo from '../../assets/car-page.svg'
import { CartItems } from '../../components'
import { Container, CartImg } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo Cart"></CartImg>
      <CartItems />
    </Container>
  )
}
