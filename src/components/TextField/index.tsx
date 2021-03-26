import { useState, InputHTMLAttributes } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  icon,
  iconPosition = 'left',
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
        <S.Input type="text" onChange={onChange} value={value} {...props} />
      )

    if (iconPosition === 'right') {
      return (
        <>
          <S.Input type="text" onChange={onChange} value={value} {...props} />
          <S.Icon>{icon}</S.Icon>
        </>
      )
    }

    return (
      <>
        <S.Icon>{icon}</S.Icon>
        <S.Input type="text" onChange={onChange} value={value} {...props} />
      </>
    )
  }

  return (
    <div>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper hasIcon={!!icon}>
        {renderInput(iconPosition, !!icon)}
      </S.InputWrapper>
    </div>
  )
}

export default TextField
