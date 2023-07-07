import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  DEFAULT = 'default',
  CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string
  theme?: ButtonTheme
}
export const Button: FC<ButtonProps> = ({ children, classname, theme, ...otherProps }) => {
  return (
        <button className={classNames(cls.Button, {}, [cls[theme]])} {...otherProps}>{children}</button>
  )
}
