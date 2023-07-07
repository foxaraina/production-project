import { type FC, useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwicher'
import { LangSwitcher } from 'widgets/LangSwicher'

interface SidebarProps {
  classname?: string
}

export const Sidebar: FC<SidebarProps> = () => {
  const [collapse, setCollapse] = useState(false)
  const toggleSidebar = (): void => {
    setCollapse(collapse => !collapse)
  }

  return (
      <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapse })}>
          <button onClick={toggleSidebar}>toggle</button>
          <div className={cls.switcher}>
              <ThemeSwitcher/>
              <LangSwitcher/>
          </div>
      </div>
  )
}
