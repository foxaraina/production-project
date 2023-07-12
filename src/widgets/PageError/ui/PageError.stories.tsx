import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { PageError } from 'widgets/PageError';

const meta: Meta<typeof PageError> = {
    title: 'Widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const PageErrorLight: Story = {
    args: {},
};

export const PageErrorDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
