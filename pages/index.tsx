import React from 'react';
import { Htag, Button, Ptag, Tag } from '../components';

export default function Home(): JSX.Element{
  return (
    <>
      <Htag tag='h1'>Text1</Htag>
      <Htag tag='h2'>Text2</Htag>
      <Htag tag='h3'>Text3</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <Ptag size='s'>Size Small</Ptag>
      <Ptag size='m'>Size Medium</Ptag>
      <Ptag size='l'>Size Large</Ptag>
      <Tag size='m' color='gray'>10</Tag>
      <Tag size='s' color='ghost'>Photoshop</Tag>
      <Tag size='s' color='green'>-10 000 &#8381;</Tag>
      <Tag size='s' color='primary'>Работа в Photoshop</Tag>
      <Tag size='m' color='red'>hh.ru</Tag>
    </>
  );
}
