import React, {useEffect, useState} from 'react';
import { Htag, Button, Ptag, Tag, Rating, Input, Search } from '../components';
import { withLayout } from '../Layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import { TextArea } from '../components/TextArea/TextArea';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element{
  useEffect(() => {
    return function cleanup(){ 
      console.log('unmount');
    }
  })
  return (
    <>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number
}