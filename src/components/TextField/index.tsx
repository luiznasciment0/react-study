import { useState, InputHTMLAttributes } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  const renderInput = (iconPosition: string, hasIcon: boolean) => {
    if (!hasIcon)
      return (
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...props}
        />
      )

    if (iconPosition === 'right') {
      return (
        <>
          <S.Input
            type="text"
            onChange={onChange}
            value={value}
            disabled={disabled}
            {...props}
          />
          <S.Icon>{icon}</S.Icon>
        </>
      )
    }

    return (
      <>
        <S.Icon>{icon}</S.Icon>
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...props}
        />
      </>
    )
  }

  return (
    <S.Wrapper error={!!error} disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper hasIcon={!!icon}>
        {renderInput(iconPosition, !!icon)}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
