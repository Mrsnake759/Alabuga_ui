# alabuga_ui

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)


# Настройки проекта 

1. npm init vue@latest

2. Переходим в папку cd —name project— 

3. Устанавливаем зависимости npm install

4. Добавим зависимости для Tailwind npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

5. Далее нужно сконфигурировать Tailwind npx tailwindcss init -p

6. Переходим в tailwind.config.js и добавляем


  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],


7. Добавляем директивы для tailwind, создаем файл index.css и вставляем туда


@tailwind base;
@tailwind components;
@tailwind utilities;


8. Далее нужно добавить импорт созданного файл в файл main.js(ts)


# Настройка prettier

Установить npm install -D prettier prettier-plugin-tailwindcss

Добавить в файл конфигурации prettier
"plugins": [
  "prettier-plugin-tailwindcss"
],
"tailwindConfig": "./tailwind.config.js"
Ввести команду npm run format

```sh
npm run lint
```
