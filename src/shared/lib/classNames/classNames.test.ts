import { describe, expect, test } from '@jest/globals';
import { classNames } from 'shared/lib/classNames/classNames';

describe('classnames', () => {
    test('one argument', () => {
        expect(classNames('classname')).toBe('classname');
    });
    test('one argument and mods true', () => {
        const expectedValue = 'classname mod1 mod2';
        expect(classNames('classname', { mod1: true, mod2: true })).toBe(expectedValue);
    });
    test('one argument and mods false', () => {
        const expectedValue = 'classname mod1';
        expect(classNames('classname', { mod1: true, mod2: false })).toBe(expectedValue);
    });
    test('one argument and additional classnames', () => {
        const expectedValue = 'classname additional additional2';
        expect(classNames('classname', {}, ['additional', 'additional2'])).toBe(expectedValue);
    });
    test('one argument mods and additional classnames', () => {
        const expectedValue = 'classname additional additional2 mod1';
        expect(classNames('classname', { mod1: true }, ['additional', 'additional2']))
            .toBe(expectedValue);
    });
});
