import React from 'react';
import { withLayout } from '../Layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import { API } from '../helpers/api';
import { useRouter } from 'next/router';
import { ProductModel } from '../interfaces/product.interface';


function Search({ menu } : SearchProps): JSX.Element{
  const router = useRouter();
  const query = String(router.query.q).toLowerCase();
  const quest: ProductModel[] = [];

  async function handleCourse(category: String, id: String) {
    console.log(category, id);
    // const data = await axios.post<ProductModel[]>(API.product.find, {
    //   category: category,
    //   limit: 10,
    // });
    // return data;
  }
  return (
    <>
      Вы ищете: { router.query.q }
      {
        menu.map((el, index) => (
          <div key={index}>
            { el.pages.map((el2, index2) => ( 
              <div key={index2} onClick={
                () => handleCourse(el2.category, el2._id)
              }>
                { el2.title.toLowerCase().includes(query)? el2.title: null }
                <div>
                {
                  // handleCourse(el2.category, el2._id)
                  //   .then(res => quest = res.data)
                  //   .then(() => quest.map(p => (<Product layout key={p._id} product={p}/>)))
                }
                </div>
              </div>
            )) }
          </div>
        ))
      }
    </>
  );
}

export default withLayout(Search);


export const getStaticProps: GetStaticProps<SearchProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  // menu.forEach(async el => 
  //  await axios.post<ProductModel[]>(API.product.find, {
  //     category: el._id.secondCategory,
  //     limit: 10,
  //   }).then(el2 => console.log(el2)))
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface SearchProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number,
}