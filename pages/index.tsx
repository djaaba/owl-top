import React, {useEffect, useState} from 'react';
import { Htag, Button, Ptag, Tag, Rating, Input, Search } from '../components';
import { withLayout } from '../Layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import { TextArea } from '../components/TextArea/TextArea';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element{
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('counter ' + counter); // каждый раз при рендере
    return function cleanup(){ // каждый раз когда выполняется эффект
      console.log('unmount');
    }
  }) // }, []) в таком случае будет выводиться только counter т.к мы ни на что не подписались

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Htag tag='h2'>Text2</Htag>
      <Htag tag='h3'>Text3</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x=>x+1)}>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <Ptag size='s'>Size Small</Ptag>
      <Ptag size='m'>Size Medium</Ptag>
      <Ptag size='l'>Size Large</Ptag>
      <Tag size='m' color='gray'>10</Tag>
      <Tag size='s' color='ghost'>Photoshop</Tag>
      <Tag size='s' color='green'>-10 000 &#8381;</Tag>
      <Tag size='s' color='primary'>Работа в Photoshop</Tag>
      <Tag size='m' color='red'>hh.ru</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
      <Input placeholder='Имя'/>
      <TextArea placeholder='Текст отзыва'/>
      <Search/>
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