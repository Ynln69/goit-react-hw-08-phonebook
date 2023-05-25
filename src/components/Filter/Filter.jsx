import { useDispatch } from 'react-redux';

import { getContactsFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

const FilterContacts = () => {
  const changeFilter = e => {
    dispatch(getContactsFilter(e.currentTarget.value.toLowerCase()));
  };

  const dispatch = useDispatch();
  return (
    <div>
      <FilterLabel>
        <FilterInput
          type="text"
          onChange={changeFilter}
          placeholder="Find contacts by name"
        />
      </FilterLabel>
    </div>
  );
};

export default FilterContacts;
