import { type FC } from 'react';
import classes from './SearchBar.module.scss';
import { BsSearchHeart } from 'react-icons/bs';
import { MyInput } from '../UI/MyInput';

interface SearchBarProps {
  value: string;
  label?: string;
}

export const SearchBar: FC<SearchBarProps> = ({ label }) => {
  return (
    <div className={classes.search}>
      <BsSearchHeart fontSize={20} color="red" />
      <MyInput type="text" placeholder={label} />
    </div>
  );
};
