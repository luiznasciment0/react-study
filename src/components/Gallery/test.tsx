import { screen } from '@testing-library/react'
import 'match-media-mock'

import mock from './mock'
import Gallery from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Gallery />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Gallery items={mock} />)

    expect(screen.getByLabelText('next image')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
