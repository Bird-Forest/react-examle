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

  const clearFilter = () => {
    setFilters({
      department: '',
      name: '',
      material: '',
      country: '',
    });
    setPrice(0);
  };

  const onRange = value => {
    setPrice(value);
    // console.log(price);
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
      console.log(price);
    }

    return products;
  }

  const productsF = filterProducts(products, filters);
  // console.log(productsF);
  // console.log(filters);

  const Arr = Array.isArray(productsF) && productsF.length > 0;
  return (
    <div>
      {isLoading && <Loading />}
      {Arr && (
        <Filters
          getFilter={getFilter}
          products={products}
          filters={filters}
          clearFilter={clearFilter}
          price={price}
          onRange={onRange}
        />
      )}
      <ProductWrap>
        {Arr &&
          productsF.map(item => {
            return <ProductItem key={nanoid()} item={item} />;
          })}
      </ProductWrap>
    </div>
  );
}

// function filterArray(array, filters) {
//   return array.filter(item => {
//     return Object.entries(filters).every(([key, value]) => {
//       return item[key] === value;
//     });
//   });
// }

// function filterArrayByMultipleValues(array, filters) {
//   return array.filter(item => {
//     return Object.entries(filters).every(([key, value]) => {
//       return item[key] === value;
//     });
//   });
// }
// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (users, select) => {
//     if (select !== null) {
//       return users.filter(user => user.name.toLowerCase().includes(select));
//     }
//     return users;
//   }
// );

// const filterProducts = useMemo(() => {
//   console.log('Фильтруем друзей ' + Date.now());
//   return products.filter(product => product.includes(filters));
// }, [filters, products]);
// const filterProducts = filterArray(products, filters);
// console.log(filterProducts);

// function foo(products, filters) {
//   console.log('Calculating visible tasks');
//   console.log(products);
//   for (let i = 0; i < products.length; i++) {
//     switch (filters) {
//       case filters.department:
//         return products.filter(product =>
//           product.department.includes(filters.department)
//         );
//       case filters.name:
//         return setProducts(
//           products.filter(product => product.name === filters.name)
//         );
//       case filters.material:
//         return setProducts(
//           products.filter(product => product.material === filters.material)
//         );
//       case filters.country:
//         return setProducts(
//           products.filter(product => product.country === filters.country)
//         );
//       default:
//         return products;
//     }
//   }
// }

// function foo(products, filters) {
//   console.log('Calculating visible tasks');
//   console.log(products);
//   let result = [];
//   for (let i = 0; i < products.length; i++) {
//     if (filters.department !== '') {
//       products.filter(product =>
//         product.department.includes(filters.department)
//       );
//     } else if (filters.name !== '') {
//       return products.filter(product => product.name.includes(filters.name));
//     } else if (filters.material !== '') {
//       return products.filter(product =>
//         product.material.includes(filters.material)
//       );
//     } else if (filters.country !== '') {
//       return products.filter(product =>
//         product.country.includes(filters.country)
//       );
//     }
//     // default:
//     return products;
//   }
// }
// const filterProducts = () => {
//   if (
//     products &&
//     products.length > 0 &&
//     filters.department &&
//     filters.department !== ''
//   ) {
//     const newProducts = products.filter(
//       obj => obj.department === filters.department
//     );
//     console.log('newProducts - ', newProducts);
//   }
//   console.log(products);
// };

// function visibleProducts(products, filters) {
//   // if (filters === null) return products;
//   // if (filters !== null)
//   if (products && products.length > 0)
//     // if (filters !== null)
//     return products.filter(product => {
//       return Object.entries(filters).every(([key, value]) => {
//         return product[key] === value;
//       });
//     });
//   // console.log(filters);
// }

// function multiFilter(products, filters) {
//   const filterKeys = Object.keys(filters);
//   // фильтруем каждый элемент массива
//   return products.filter(item => {
//     // проходим по каждому фильтру
//     return filterKeys.every(key => {
//       // если фильтр не задан, то он проходит
//       if (!filters[key].length) return true;
//       // проверяем, есть ли значение в массиве
//       return filters[key].includes(item[key]);
//     });
//   });
// }
