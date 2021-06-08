import 'match-media-mock'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mock from './mock'
import Gallery from '.'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mock[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mock[1].src)
  })

  it('should handle open/close modal', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)
    // selecionar o modal
    const modal = screen.getByLabelText('modal')

    // verificar se o modal tá escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o modal e verificar se ele fechou
    // fireEvent.click(screen.getByLabelText(/close modal/i))
    // expect(modal.getAttribute('aria-hidden')).toBe('true')
    // expect(modal).toHaveStyle({ opacity: 0 })
  })
})
