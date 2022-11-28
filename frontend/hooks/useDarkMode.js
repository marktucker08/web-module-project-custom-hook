import { useState } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    const updateMode = (newValue) => {
        setValue(newValue);
    }

    return [value, updateMode];
}