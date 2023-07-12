import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCSSLoader } from '../build/loaders/buildCSSLoader';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        const paths: BuildPaths = {
            entry: '',
            output: '',
            html: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
        };

        config.resolve.modules.push(paths.src);
        config.resolve.extensions.push('.ts', '.tsx');
        // eslint-disable-next-line no-param-reassign,array-callback-return,consistent-return
        config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
            // @ts-ignore
            if (/svg/.test(rule.test)) {
                return { ...rule, exclude: /\.svg/i };
            }
            return rule;
        });
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config.module.rules.push(buildCSSLoader(true));
        return config;
    },
};
export default config;
