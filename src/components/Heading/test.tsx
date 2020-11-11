import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel..
    // expect - assertion - comparação - análise (espero que renderize a logo branca)

    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel..
    // expect - assertion - comparação - análise (espero que renderize a logo branca)

    renderWithTheme(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a header with a line to the left side', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel..
    // expect - assertion - comparação - análise (espero que renderize a logo branca)

    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a header with a line to bottom', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel..
    // expect - assertion - comparação - análise (espero que renderize a logo branca)

    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ispum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
