import { Meta, Story } from '@storybook/react'
import Main from '.'
import { MainProps } from './types'

export default {
  title: 'Main',
  component: Main
} as Meta<MainProps>

export const Basic: Story<MainProps> = (args) => <Main {...args} />
