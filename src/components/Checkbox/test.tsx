import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label if its not passed as prop', () => {
    renderWithTheme(<Checkbox />)

    // QUANDO VC QUER BUSCAR ALGO QUE NAO EXISTE NA TELA PARA CONFIRMAR QUE NAO EXISTE,
    // USE "QUERYBY" EM VEZ DE "GETBY"
    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })
})
