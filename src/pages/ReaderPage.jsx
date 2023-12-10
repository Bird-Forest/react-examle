import React, { useState } from 'react';
import publications from '../components/Reader/publications.json';
import Reader from 'components/Reader/Reader';
import { ThemeProvider } from 'styled-components';

export const darkTheme = {
  body: '#9575cd',
  text: '#673ab7',
  header: '#6a1b9a',
  card: '#ede7f6',
};

export const lightTheme = {
  body: '#acfc6b',
  text: '#33691e',
  header: '#64dd17',
  card: '#ddfeb8',
};

export default function ReaderPage() {
  const [theme, setTheme] = useState(lightTheme);
  function handleClick() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <Reader items={publications} onChangeTheme={handleClick} />
    </ThemeProvider>
  );
}
