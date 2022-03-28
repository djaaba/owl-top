import React from 'react';
import { withLayout } from '../Layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import { API } from '../helpers/api';

function Search({firstCategory} : SearchProps): JSX.Element{
  return (
    <>
      Search: {firstCategory}
    </>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    },
  };
};

interface SearchProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number
}