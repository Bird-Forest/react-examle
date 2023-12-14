import React, { useEffect, useState } from 'react';
import { fetchProducts } from './product-api';
import { Loading } from 'components/Loader/Loading';
import ProductItem from './ProductItem';
import { ProductWrap } from './Product.styled';
import Filters from './Filters';
import { nanoid } from '@reduxjs/toolkit';

export default function Products() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const [filters, setFilters] = useState({
    department: '',
    name: '',
    material: '',
    country: '',
  });

  const clearFilter = () => {
    setFilters({
      department: '',
      name: '',
      material: '',
      country: '',
    });
    setPrice(0);
  };

  useEffect(() => {
    getProducts();
    return () => {};
  }, []);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetchProducts();
      setProducts(response);
    } catch (error) {
      console(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getFilter = event => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [event.target.name]: event.target.value,
    }));
  };

  const onRange = newPrice => {
    setPrice(newPrice);
  };

  function filterProducts(products, filters) {
    if (filters.department !== '') {
      products = products.filter(product =>
        product.department.includes(filters.department)
      );
    }
    if (filters.name !== '') {
      products = products.filter(product =>
        product.name.includes(filters.name)
      );
    }
    if (filters.material !== '') {
      products = products.filter(product =>
        product.material.includes(filters.material)
      );
    }
    if (filters.country !== '') {
      products = products.filter(product =>
        product.country.includes(filters.country)
      );
    }
    if (price >= 10 && price < 1000) {
      products = products.filter(product => product.price <= price);
    }
    // console.log(products);
    return products;
  }

  const productsF = filterProducts(products, filters);

  const Arr = Array.isArray(productsF) && productsF.length > 0;
  return (
    <>
      {isLoading && <Loading />}
      <Filters
        getFilter={getFilter}
        products={products}
        filters={filters}
        clearFilter={clearFilter}
        price={price}
        onRange={onRange}
      />

      <ProductWrap>
        {Arr &&
          productsF.map(item => {
            return <ProductItem key={nanoid()} item={item} />;
          })}
      </ProductWrap>
    </>
  );
}

// function filterArray(array, filters) {
//   return array.filter(item => {
//     return Object.entries(filters).every(([key, value]) => {
//       return item[key] === value;
//     });
//   });
// }
