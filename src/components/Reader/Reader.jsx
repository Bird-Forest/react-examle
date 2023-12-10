// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
// import { ThemeProvider } from 'styled-components';
import { Publication } from './Article';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import {
  BtnLeft,
  BtnReaderWrap,
  BtnRight,
  BtnSun,
  CountReader,
  ReaderWrap,
  TextReaderWrap,
} from './Reader.styled';

const LS_KEY = 'reader_item_index';

export default function Reader({ items, onChangeTheme }) {
  const [index, setIndex] = useState(() => {
    const savedState = localStorage.getItem(LS_KEY);
    return savedState ? Number(savedState) : 1;
  });

  useEffect(() => {
    const prevIndex = localStorage.getItem(LS_KEY);
    if (prevIndex !== index) {
      localStorage.setItem(LS_KEY, index);
    }
  });

  const onChangeValue = value => {
    setIndex(prevIndex => prevIndex + value);
  };

  const total = items.length;
  const showItem = items[index - 1];
  return (
    <ReaderWrap>
      <BtnReaderWrap>
        <BtnLeft disabled={index === 1} onClick={() => onChangeValue(-1)}>
          <FaArrowLeft className="icon-arrow" />
        </BtnLeft>
        <BtnSun type="button" onClick={onChangeTheme}>
          <FaSun className="icon-sun" />
          <FaMoon className="icon-moon" />
        </BtnSun>
        <BtnRight disabled={index === total} onClick={() => onChangeValue(+1)}>
          <FaArrowRight className="icon-arrow" />
        </BtnRight>
      </BtnReaderWrap>
      <TextReaderWrap>
        <CountReader>
          {index}/{total}
        </CountReader>
        <Publication item={showItem} />
      </TextReaderWrap>
    </ReaderWrap>
  );
}
