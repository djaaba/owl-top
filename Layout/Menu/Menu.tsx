import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import CoursesIcon from "./icons/hat.svg";
import ServicesIcon from "./icons/cloud.svg";
import BooksIcon from "./icons/book.svg";
import ProductsIcon from "./icons/box.svg";
import { TopLevelCategory } from "../../interfaces/page.interface";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "cources",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id == firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id == firstCategory && buildSecondLevel(m)}
            {/* если active - можем строить второй уровень */}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      // eslint-disable-next-line react/jsx-key
      <a
        href={`/${route}/${p.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}
      >
        {p.category}
      </a>
    ));
  };

  return <div>{buildFirstLevel()}</div>;
};
