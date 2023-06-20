import { useDispatch } from 'react-redux';
import { getContactsFilter } from 'redux/filterSlice';

import { ReactComponent as SearchIcon } from './../../images/search.svg';

import { FormLabel, FormInput } from 'components/PhoneForm/PhoneForm.styled';
import { FilterBox } from './Filter.styled';

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
