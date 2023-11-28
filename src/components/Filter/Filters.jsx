import React from 'react';

function getCategories(items, itemName) {
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

export default function Filters({ products, filters, getFilter }) {
  const departments = getCategories(products, 'department');
  const materials = getCategories(products, 'material');
  const names = getCategories(products, 'name');
  const countries = getCategories(products, 'country');

  console.log(filters);
  return (
    <div>
      <form>
        <label htmlFor="department">Choose a department:</label>
        <select
          id="department"
          name="department"
          // value={department}
          // onChange={e => setDepartment(e.target.value)}
          value={filters.department || ''}
          onChange={getFilter}
        >
          <option value="">--Department--</option>
          {departments.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
      <form>
        <label htmlFor="name">Choose a name:</label>
        <select
          id="name"
          name="name"
          // value={name}
          // onChange={e => setName(e.target.value)}
          value={filters.name || ''}
          onChange={getFilter}
        >
          <option value="">--Product--</option>
          {names.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
      <form>
        <label htmlFor="material">Choose a material:</label>
        <select
          id="material"
          name="material"
          // value={material}
          // onChange={e => setMaterial(e.target.value)}
          value={filters.material || ''}
          onChange={getFilter}
        >
          <option value="">--Material--</option>
          {materials.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
      <form>
        <label htmlFor="country">Choose a country:</label>
        <select
          id="country"
          name="country"
          // value={country}
          // onChange={e => setCountry(e.target.value) }
          value={filters.country || ''}
          onChange={getFilter}
        >
          <option value="">--Country--</option>
          {countries.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
    </div>
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
