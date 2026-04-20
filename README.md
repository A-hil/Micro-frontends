# 🧩 Micro-frontends — Коллекция UI-компонентов и блоков

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

**Цель репозитория:** Хранилище учебных и экспериментальных микрофронтенд-блоков для последующей интеграции в реальные веб-проекты. Каждый компонент изолирован, построен на современном стеке (React + Vite + Tailwind CSS) и готов к использованию.

---

## Начало работы

Следуйте инструкции ниже, чтобы развернуть любой из проектов локально.

### 1. Подготовка окружения

Убедитесь, что у вас установлены **Node.js** (версия 18.x или новее) и **npm** (входит в состав Node.js).

*   **Скачать Node.js:** [https://nodejs.org/](https://nodejs.org/) (выбирайте LTS-версию)
*   **Проверка установки в терминале:**
    ```bash
    node -v  # Например: v20.10.0
    npm -v   # Например: 10.2.3

2. Клонирование репозитория
git clone https://github.com/A-hil/Micro-frontends.git
cd Micro-frontends

3. Установка зависимостей
   Важно: В текущей структуре у каждого подпроекта свои зависимости. Необходимо установить их для каждого модуля отдельно.
   Первый вариант (Ручной - для выборочной работы):
    cd ui-base-block
    npm install
    cd ..
   Второй вариант (Автоматический — для всех сразу — Linux/macOS/Git Bash):
   find . -maxdepth 2 -name "package.json" -execdir npm install \;

4. Глобальные инструменты (Vite, Tailwind CSS)
Вам не нужно устанавливать их глобально. Vite и Tailwind CSS уже входят в devDependencies каждого проекта. Все команды запуска используют локальные бинарные файлы из node_modules.

апуск проектов (Development)
Перейдите в папку нужного проекта и выполните команду:
npm run dev

## Обзор проектов

| Проект | Краткое описание | Технологии |
| :--- | :--- | :--- |
| **ui-base-block** | Базовый UI-компонент (кнопка, карточка или примитив). Отправная точка для создания новых блоков. | React, Vite, Tailwind CSS, JavaScript |
| **Tabs-content** | Компонент вкладок (табов) с динамическим переключением контента. | React, Vite, Tailwind CSS |
| **Slider** | Карусель изображений или контента с навигацией. | React, Vite, Tailwind CSS |
| **UserCard** | Карточка пользователя (аватар, имя, роль). | React, Vite, Tailwind CSS |
| **Registration-form-with-Google** | Форма регистрации с имитацией входа через Google (UI-макет). | React, Vite, Tailwind CSS |
| **Notification-App** | Система уведомлений (тосты/алерты). | React, Vite, Tailwind CSS |
| **Admin** | Заготовка административной панели (дашборд). | React, Vite, Tailwind CSS |
| **VisibleContent** | Компонент с условным рендерингом (показать/скрыть). | React, Vite, Tailwind CSS |

---

## Доступные скрипты (для каждого проекта)

> **Важно:** Все команды выполняются **внутри папки конкретного проекта** (например, `cd ui-base-block`).

| Команда | Действие |
| :--- | :--- |
| `npm run dev` | Запуск dev-сервера (горячая перезагрузка) |
| `npm run build` | Сборка production-версии в папку `dist` |
| `npm run preview` | Локальный просмотр собранной версии |
| `npm run lint` | Проверка кода линтером (ESLint) |




   
