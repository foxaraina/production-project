import { type FC } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

export const PageLoader: FC = () => (
    <div className={cls.PageLoader}>
        <Loader />
    </div>
);
