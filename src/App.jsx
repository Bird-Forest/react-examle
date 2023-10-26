import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const SharedLayout = lazy(() => import('pages/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage'));
const RegistrationFB = lazy(() => import('pages/RegisterFB'));
const SignIn = lazy(() => import('components/RegistrationFB/SignIn'));
const SignUp = lazy(() => import('components/RegistrationFB/SignUp'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="fairbase" element={<RegistrationFB />}>
          <Route path="auth" element={<SignUp />} />
          <Route path="sign" element={<SignIn />} />
        </Route>
      </Route>
    </Routes>
  );
}
