import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

const BugButton = () => {
    const [error, setError] = useState(false);
    const createBug = () => {
        setError((error) => !error);
    };

    useEffect(() => {
        if (error) {
            throw Error('error!');
        }
    }, [error]);
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={createBug}>Сломать все</Button>
    );
};

export default BugButton;
