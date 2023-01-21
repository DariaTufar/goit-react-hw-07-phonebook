import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux';

import { FilterTitle, FilterInput } from './Filter.styled';
import { setContactFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    const currentValueLowerCase = e.target.value.toLowerCase().trim();
    dispatch(setContactFilter(currentValueLowerCase));
  };

  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        name="filter"
        onChange={onChangeFilter}
        value={filterValue}
      ></FilterInput>
    </div>
  );
};
