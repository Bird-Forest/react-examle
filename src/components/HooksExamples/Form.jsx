import ModalContent from 'components/Modal/ModalContent';
import useLocalStorage from 'hooks/useLocalStorage';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
// import { useLocalStorage } from './hooks/useLocalStorage';

export default function Form() {
  // Цей стейт буде викликаний один раз під час першого рендеру useEffect

  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');
  const [showModal, setShowModal] = useState(false);

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
    // reset();
  };

  return (
    <div>
      <h2>Form</h2>
      <form autoComplete="off">
        <label>
          <span>Почта</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>

        <label>
          <span>Пароль</span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
}
