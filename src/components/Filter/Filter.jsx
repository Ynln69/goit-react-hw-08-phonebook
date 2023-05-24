import { useDispatch } from 'react-redux';

import { getContactsFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

const FilterContacts = () => {
  const changeFilter = e => {
    dispatch(getContactsFilter(e.currentTarget.value.toLowerCase()));
  };

  const dispatch = useDispatch();
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" onChange={changeFilter} />
    </FilterLabel>
  );
};

export default FilterContacts;
