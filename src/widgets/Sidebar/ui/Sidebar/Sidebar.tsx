import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwicher';
import { LangSwitcher } from 'widgets/LangSwicher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  classname?: string
}

export const Sidebar: FC<SidebarProps> = () => {
    const [t] = useTranslation();
    const [collapse, setCollapse] = useState(false);
    const toggleSidebar = (): void => {
        setCollapse((collapse) => !collapse);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapse })}
        >
            <button
                data-testid="sidebar-toggle"
                type="button"
                onClick={toggleSidebar}
            >
                {t('Toggle')}
            </button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
