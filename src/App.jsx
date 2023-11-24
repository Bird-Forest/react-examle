import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const SharedLayout = lazy(() => import('pages/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage'));
const RegistrationFB = lazy(() => import('pages/RegisterFB'));
const SignIn = lazy(() => import('components/RegistrationFB/SignIn'));
const SignUp = lazy(() => import('components/RegistrationFB/SignUp'));
const PlayerPage = lazy(() => import('pages/PlayerPage'));
const ReaderPage = lazy(() => import('pages/ReaderPage'));
const RequestPage = lazy(() => import('pages/RequestPage'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="fairbase" element={<RegistrationFB />}>
          <Route path="auth" element={<SignUp />} />
          <Route path="sign" element={<SignIn />} />
        </Route>
        <Route path="player" element={<PlayerPage />} />
        <Route path="reader" element={<ReaderPage />} />
        <Route path="request" element={<RequestPage />} />
      </Route>
    </Routes>
  );
}
