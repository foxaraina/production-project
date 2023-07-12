import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'Shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
        children: 'Ссылка',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const AppLinkPrimary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};

export const AppLinkSecondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};

export const AppLinkPrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};

export const AppLinkSecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
