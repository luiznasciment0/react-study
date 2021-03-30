import { Story, Meta } from '@storybook/react/types-6-0'
import GameInfo from '.'

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: '210.00'
}

export const Default: Story = () => <GameInfo {...props} />
