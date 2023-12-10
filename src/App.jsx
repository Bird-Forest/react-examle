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
const HooksPage = lazy(() => import('pages/HooksPage'));
const Counter = lazy(() => import('components/HooksExamples/Counter'));
const Form = lazy(() => import('components/HooksExamples/Form'));
const Clock = lazy(() => import('components/HooksExamples/Clock'));
const Friends = lazy(() => import('components/HooksExamples/Friends'));
const Formik = lazy(() => import('components/HooksExamples/Formik'));
const Products = lazy(() => import('components/Filter/Products'));
const BasketPage = lazy(() => import('pages/BasketPage'));
const ShowcaseBurgers = lazy(() =>
  import('./components/Basket/ShowcaseBurgers')
);
const FavoritesList = lazy(() => import('components/Basket/FavoritesList'));
const BasketList = lazy(() => import('./components/Basket/BasketList'));

export default function App() {
  return (
    <div>
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
          <Route path="hooks" element={<HooksPage />}>
            <Route path="counter" element={<Counter />} />
            <Route path="form" element={<Form />} />
            <Route path="clock" element={<Clock />} />
            <Route path="friend" element={<Friends />} />
            <Route path="formik" element={<Formik />} />
          </Route>
          <Route path="product" element={<Products />} />
          <Route path="basket" element={<BasketPage />}>
            <Route path="burger" element={<ShowcaseBurgers />} />
            <Route path="favorites" element={<FavoritesList />} />
            <Route path="order" element={<BasketList />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
