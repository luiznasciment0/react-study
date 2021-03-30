import Heading from 'components/Heading'
import Button from 'components/Button'
import Ribbon from 'components/Ribbon'

import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ description, price, title }: GameInfoProps) => (
  <S.Wrapper>
    <Ribbon color="primary" size="normal">
      {price}
    </Ribbon>
    <Heading lineBottom lineColor="primary" color="black">
      {title}
    </Heading>
    <Heading color="black">{description}</Heading>
    <Button>Add to cart</Button>
    <Button>Wishlist</Button>
  </S.Wrapper>
)

export default GameInfo
