import { type FC } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import AppLink from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

export const Navbar: FC = () => {
  const [t] = useTranslation()
  return (
        <div className={classNames(cls.navbar)}>
            <AppLink to={RoutePaths.main}>{t('Главная страница')}</AppLink>
            <AppLink to={RoutePaths.about}>{t('О проекте')}</AppLink>
        </div>
  )
}
