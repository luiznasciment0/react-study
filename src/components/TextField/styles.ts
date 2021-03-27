import styled, { css, DefaultTheme } from 'styled-components'

export type InputWrapperProps = { hasIcon: boolean }

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

import { TextFieldProps } from '.'

export const Input = styled.input<TextFieldProps>`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

type LabelProps = Pick<TextFieldProps, 'disabled'>

export const Label = styled.label<LabelProps>`
  ${({ theme, disabled }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${disabled ? theme.colors.gray : theme.colors.black};
    /* cursor: ${disabled ? 'not-allowed' : 'pointer'}; */
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};

    & > svg {
      width: 100%;
    }
  `}
`

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
