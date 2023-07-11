import { type FC } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export const LangSwitcher: FC = () => {
    const { t, i18n } = useTranslation();
    const toggleLang = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button onClick={toggleLang} theme={ButtonTheme.CLEAR}>{t('Язык')}</Button>
    );
};
