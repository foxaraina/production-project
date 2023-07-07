import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}
interface AppLinkProps extends LinkProps {
  classname?: string
  theme?: AppLinkTheme
}
const AppLink: FC<AppLinkProps> = ({
  classname,
  theme = AppLinkTheme.PRIMARY,
  children,
  ...otherProps
}) => {
  return (
        <Link {...otherProps}
              className={classNames(cls.AppLink, {}, [classname, cls[theme]])}>
            {children}
        </Link>
  )
}
export default AppLink
