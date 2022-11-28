import { useState } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('darkMode', initialValue);

    const updateMode = (newValue) => {
        setValue(newValue);
    }

    return [value, updateMode];
}