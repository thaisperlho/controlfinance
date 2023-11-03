import React from 'react'
import ResumeItem from '../ResumeItem'
import * as  C from './styles'

import{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa'

export const Resume = () => {
  return (
    <C.Container>
     <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="5000"/>
    <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="3000"/>
    <ResumeItem title="Total" Icon={FaDollarSign} value="2000"/>
    </C.Container>
  )
}

export default Resume