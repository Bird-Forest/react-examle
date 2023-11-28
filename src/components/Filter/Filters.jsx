import React from 'react';
import {
  BtnClear,
  FilterForm,
  FilterWrap,
  OptionForm,
  SelectForm,
} from './Product.styled';

function getCategories(items, itemName) {
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

export default function Filters({ products, filters, getFilter, clearFilter }) {
  const departments = getCategories(products, 'department');
  const materials = getCategories(products, 'material');
  const names = getCategories(products, 'name');
  const countries = getCategories(products, 'country');

  console.log(filters);
  return (
    <FilterWrap>
      <FilterForm>
        <label htmlFor="department"></label>
        <SelectForm
          id="department"
          name="department"
          // value={department}
          // onChange={e => setDepartment(e.target.value)}
          value={filters.department || ''}
          onChange={getFilter}
        >
          <OptionForm value="">--Department--</OptionForm>
          {departments.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <FilterForm>
        <label htmlFor="name"></label>
        <SelectForm
          id="name"
          name="name"
          // value={name}
          // onChange={e => setName(e.target.value)}
          value={filters.name || ''}
          onChange={getFilter}
        >
          <OptionForm value="">--Product--</OptionForm>
          {names.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <FilterForm>
        <label htmlFor="material"></label>
        <SelectForm
          id="material"
          name="material"
          // value={material}
          // onChange={e => setMaterial(e.target.value)}
          value={filters.material || ''}
          onChange={getFilter}
        >
          <OptionForm value="">--Material--</OptionForm>
          {materials.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <FilterForm>
        <label htmlFor="country"></label>
        <SelectForm
          id="country"
          name="country"
          // value={country}
          // onChange={e => setCountry(e.target.value) }
          value={filters.country || ''}
          onChange={getFilter}
        >
          <OptionForm value="">--Country--</OptionForm>
          {countries.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <BtnClear onClick={clearFilter}>Clear</BtnClear>
    </FilterWrap>
  );
}

// function filterArrayByMultipleValues(array, filters) {
//   return array.filter(item => {
//     return Object.entries(filters).every(([key, value]) => {
//       return item[key] === value;
//     });
//   });
// }

// const [department, setDepartment] = useState('department');
// const [name, setName] = useState('name');
// const [material, setMaterial] = useState('material');
// const [country, setCountry] = useState('country');

// onChange={e => {
//   console.log('e.target.value: ', e.target.value);
//   setCountry(e.target.value);
//   onFilterChange(
//     products.filter(obj => obj.country === e.target.value)
//   );
// }}