import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import NotFoundPage from 'pages/NotFoundPage/ui/NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'Pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const NotFoundPageLight: Story = {
    args: {},
};

export const NotFoundPageDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
