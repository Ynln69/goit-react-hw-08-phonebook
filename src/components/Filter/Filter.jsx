import { useDispatch } from 'react-redux';
import { ReactComponent as SearchIcon } from './../../images/search.svg';

import { getContactsFilter } from 'redux/filterSlice';
import { FilterBox } from './filter.styled';
import { FormLabel, FormInput } from 'components/PhoneForm/PhoneForm.styled';

const FilterContacts = () => {
  const changeFilter = e => {
    dispatch(getContactsFilter(e.currentTarget.value.toLowerCase()));
  };

  const dispatch = useDispatch();
  return (
    <FilterBox>
      <FormLabel>
        <SearchIcon width="18px" />
        <FormInput
          type="text"
          onChange={changeFilter}
          placeholder="Find contacts by name"
        />
      </FormLabel>
    </FilterBox>
  );
};

export default FilterContacts;
