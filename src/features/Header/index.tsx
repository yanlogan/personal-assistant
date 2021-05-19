import React from 'react'

import { HeaderText } from './styled'

type THeader = {
  text: string,
}

export const Header = ({ text }: THeader) => (
  <HeaderText>{text}</HeaderText>
)
