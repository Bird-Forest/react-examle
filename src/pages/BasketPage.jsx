import React, { Suspense } from 'react';
import ProductProvider from 'components/Basket/ProductProvider';
import { Outlet } from 'react-router-dom';
import { Loading } from 'components/Loader/Loading';
import NavigateBar from 'components/Basket/NavigateBar';

export default function BasketPage() {
  return (
    <ProductProvider>
      <NavigateBar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </ProductProvider>
  );
}
