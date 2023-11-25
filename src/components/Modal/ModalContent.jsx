import React from 'react';
import { ModalrWrap, PopUp } from './Modal.styled';

export default function ModalContent({ onClose }) {
  return (
    <div>
      <ModalrWrap>
        <PopUp>I'm a modal dialog</PopUp>
        <button onClick={onClose}>Close</button>
      </ModalrWrap>
    </div>
  );
}
