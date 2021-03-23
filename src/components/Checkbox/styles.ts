import styled, { css } from 'styled-components'

import { CheckboxProps } from '.'

export const Wrapper = styled.form``

export const Label = styled.label<CheckboxProps>`
  ${({ labelColor, theme }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`
