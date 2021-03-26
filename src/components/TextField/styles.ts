import styled, { css, DefaultTheme } from 'styled-components'

export type WrapperProps = { hasIcon: boolean }

const wrapperModifier = {
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2rem;

      & + input {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const InputWrapper = styled.div<WrapperProps>`
  ${({ theme, hasIcon }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
    ${hasIcon && wrapperModifier.withIcon(theme)}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`
