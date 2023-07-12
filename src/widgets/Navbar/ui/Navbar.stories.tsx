import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Navbar } from 'widgets/Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarLight: Story = {
    args: {},
};

export const NavbarDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
