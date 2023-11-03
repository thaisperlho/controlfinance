import React from 'react'
import * as  C from './styles'

export const ResumeItem = () => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Entradas</C.HeaderTitle>
        <C.HeaderIcon src="/assets/money.svg" alt="money"/>
      </C.Header>
        <C.Total>R$ 1000,00</C.Total>
    </C.Container>
  )
}
