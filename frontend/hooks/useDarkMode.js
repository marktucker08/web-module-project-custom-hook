import { useState } from 'react';

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const updateMode = (newValue) => {
        setValue(newValue);
    }

    return [value, updateMode];
}