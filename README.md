# [owl-top](https://owl-top.netlify.app/courses/financial-analytics) – онлайн-каталог IT курсов 

Учебный курс - создание веб-приложения онлайн-каталог IT курсов с использованием React, Typescript, Next.js

**Цели:**

- Поработать с React
- Поработать с React Router
- Научиться строить базовую структуру приложения
- Поработать с API запросами
- Поработать с Next

**Что я улучшил в этом продукте?**
- Починил useEffect, чтобы боковое меню переключалось на категории(раньше работала только 1 категория)
- Починил систему поиска, изначально она не работала в этом курсе
- Добавил возможность фильтрации по цене и рейтингу курсов в подкатегориях
- Добавил фикс адаптации для телефонов

## Быстрый старт

#### `npm i express` – установить зависимости проекта

#### `npm run start` – запуск devServer на http://localhost:3000/

## Скрипты

#### `npm run start` – запуск devServer на http://localhost:3000/

#### `npm run build` – production сборка проекта

## Используемые библиотеки

- [date-fns](https://github.com/date-fns/date-fns)
- [next.js](https://github.com/vercel/next.js/)
- [react-dom](https://github.com/facebook/react/tree/main/packages/react-dom)
- [framer-motion](https://github.com/framer/motion)
- [sharp](https://github.com/lovell/sharp)
- [axios](https://github.com/axios/axios)

### Структура проекта

```
├── components/                  # Папка с используемыми элементами
│   ├── ...                      # UI-kit для приложения
│   └── index.ts                 # Файл экспорта всех компонентов UI-kit
├── context/                     # Контексты приложения
├── helpers/                     # Папка с вспомогательными функциями и объектами приложения
├── hooks/                       # Папка с пользовательскими хуками приложения
├── interfaces/                  # Папка с интерфейсами приложения
├── Layout/                      # Папка с повторяющейся разметкой страницы для роутинга
├── page-components/             # Папка с компонентом страницы
├── pages/                       # Папка со страницами приложения
├── public/                      # Папка с HTML, определяющим шаблон приложения
├── styles/                      # Стили приложения
    └── global.css/              # Файл глобальных стилей приложения
├── .env                             # Переменные окружения для приложения
├── .eslintrc                        # Настройки линтера
├── api.json                         # Json с данными API(не используется)
├── api2.json                        # Json с данными API(не используется)
├── .next.config.js                  # Конфигурации next
├── .next-env.d.ts                   # Настройки окружения next
├── .gitignore                       # Список исключённых файлов из Git
├── package.json                     # Список модулей и прочей информации
├── README.md                        # Документация приложения
└── tsconfig.json                    # Параметры компилятора TypeScript

```
