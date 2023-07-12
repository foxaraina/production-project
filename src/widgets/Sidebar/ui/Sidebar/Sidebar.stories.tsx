import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Sidebar } from 'widgets/Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'Widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarLight: Story = {
    args: {},
};

export const SidebarDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
