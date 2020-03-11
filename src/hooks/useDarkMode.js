import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (value) => {
    const [dMode, setDMode] = useLocalStorage(value)

    useEffect(() => {
        if(dMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode'));
    }, [dMode])

    return [dMode, setDMode]
}