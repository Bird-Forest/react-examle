import {
  BtnClear,
  FilterForm,
  FilterWrap,
  InputRange,
  LabelRange,
  OptionForm,
  RangeWrap,
  SelectForm,
  SpanRange,
} from './Product.styled';

function getCategories(items, itemName) {
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

export default function Filters({
  products,
  filters,
  getFilter,
  price,
  onRange,
  clearFilter,
}) {
  const departments = getCategories(products, 'department');
  const materials = getCategories(products, 'material');
  const names = getCategories(products, 'name');
  const countries = getCategories(products, 'country');

  const handleOnChangeFilter = event => {
    const key = event.target.name;
    const value = event.target.value;
    console.log({ [key]: value });
    getFilter(event);
  };

  const handleOnChangePrice = event => {
    const value = event.target.value;
    onRange(value);
  };
  // console.log(value);

  return (
    <FilterWrap>
      <FilterForm>
        {/* <label htmlFor="department"></label> */}
        <SelectForm
          id="department"
          name="department"
          value={filters.department || ''}
          onChange={handleOnChangeFilter}
        >
          <OptionForm value="">Department</OptionForm>
          {departments.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <FilterForm>
        {/* <label htmlFor="name"></label> */}
        <SelectForm
          id="name"
          name="name"
          value={filters.name || ''}
          onChange={handleOnChangeFilter}
        >
          <OptionForm value="">Product</OptionForm>
          {names.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <FilterForm>
        {/* <label htmlFor="material"></label> */}
        <SelectForm
          id="material"
          name="material"
          value={filters.material || ''}
          onChange={handleOnChangeFilter}
        >
          <OptionForm value="">Material</OptionForm>
          {materials.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <FilterForm>
        <SelectForm
          id="country"
          name="country"
          value={filters.country || ''}
          onChange={handleOnChangeFilter}
        >
          <OptionForm value="">Country</OptionForm>
          {countries.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <RangeWrap>
        <LabelRange htmlFor="price">Price</LabelRange>
        <InputRange
          type="range"
          id="price"
          name="price"
          min={0}
          max={1000}
          step={100}
          value={price}
          onChange={handleOnChangePrice}
        />
        <SpanRange id="ranger">{price}</SpanRange>
      </RangeWrap>
      <BtnClear type="button" onClick={clearFilter}>
        Clear
      </BtnClear>
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
// const [departments, setDepartments] = useState([]);
// const [materials, setMaterials] = useState([]);
// const [names, setNames] = useState([]);
// const [countries, setCountries] = useState([]);

// useEffect(() => {
//   setDepartments(() => getCategories(products, 'department'));
//   setMaterials(() => getCategories(products, 'material'));
//   setNames(() => getCategories(products, 'material'));
//   setCountries(() => getCategories(products, 'country'));
//   return () => {};
// }, [products]);
//  setDepartments(() => getCategories(products, 'department'));
//  setMaterials(() => getCategories(products, 'material'));
//  setNames(() => getCategories(products, 'material'));
//   setCountries(() => getCategories(products, 'country'));
