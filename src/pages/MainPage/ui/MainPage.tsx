import { type FC } from 'react';
import BugButton from 'shared/ui/BugButton/BugButton';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
    const [t] = useTranslation();
    return (
        <div>
            <BugButton />
            {t('Main Page')}
            <p className="tes">{t('Основная страница сайта')}</p>
        </div>
    );
};

export default MainPage;
