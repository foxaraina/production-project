import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

const PageError = () => {
    const [t] = useTranslation();
    const reload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div>
            <h1>{t('Произошла ошибка перезагрузите страницу')}</h1>
            <Button onClick={reload}>{t('Обновить страницу')}</Button>
        </div>
    );
};

export default PageError;
