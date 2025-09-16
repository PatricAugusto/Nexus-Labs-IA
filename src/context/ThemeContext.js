// src/context/ThemeContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// 1. Criar o Contexto
export const ThemeContext = createContext();

const darkTheme = {
    background: '#121212',
    text: '#ffffff',
    cardBackground: 'rgba(255, 255, 255, 0.1)',
    cardBorder: 'rgba(255, 255, 255, 0.2)',
    glassBackground: 'rgba(255, 255, 255, 0.15)',
    glassBorder: 'rgba(255, 255, 255, 0.3)',
};

const lightTheme = {
    background: '#f0f2f5',
    text: '#121212',
    cardBackground: 'rgba(0, 0, 0, 0.05)',
    cardBorder: 'rgba(0, 0, 0, 0.1)',
    glassBackground: 'rgba(0, 0, 0, 0.15)',
    glassBorder: 'rgba(0, 0, 0, 0.3)',
};

// 2. Criar o Provedor do Contexto
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={selectedTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

// 3. Criar o Hook Personalizado para usar o Contexto
export const useTheme = () => {
    return useContext(ThemeContext);
};