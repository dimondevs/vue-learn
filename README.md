# Обучение VueJS

## Зачем нужны фрейморки

<a href="https://www.youtube.com/watch?feature=player_embedded&v=YqSd4aTdD8U" target="_blank"><img src="https://img.youtube.com/vi/YqSd4aTdD8U/0.jpg"
alt="Зачем нужны фрейморки" width="500" height="300" border="10" /></a>

## Материалы для обучения

1. [VueJs](https://vuejs.org/) - Оффициальный сайт и документация фрейморка.
2. [ES6 Basic](https://www.youtube.com/watch?v=4YfsAz-sNAo&list=PLqHlAwsJRxAOpWPtj2T6HhSzX-lKmKV2q) - Видео курс по ES6
3. [ES6](https://learn.javascript.ru/es-modern) - Новые возможности Javascript.
4. [Vue Awesome](https://github.com/vuejs/awesome-vue) - Большой список всего, что может понадобится при разработке на VueJs.
5. [Vue Mastery](https://www.vuemastery.com/) - Оффициальный сайт от для обучения [EN].
6. [Vue Курсы](https://coursehunters.net/course/freymvork-vue-js-polnoe-rukovodstvo-dlya-sovremennoy-veb-razrabotki) - Огромный видео курс по VueJs [RU].
7. [Medium](https://medium.com/tag/vuejs) - Полезные статьи по VueJs.
8. [Telegram](https://t.me/vuejs_ru) - Телеграмм канал, где можно просить помощи у ребят.
9. [Vue DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) - Расширение для хрома, дебаг VueJs в браузере

## Как выполнять задания

### 1. Сделайте Fork этого репозитория

### 2. В списке ваших репозиториев появится новый, откройте его

### 3. Склонируйте его себе на компьютер

```
git clone <link here>
cd vue-learn
```

### 4. Создайте новую ветку

Создайте новую ветку для одного из заданий темы `hw<номер темы>_<номер задания>`.

Например, мы хотим выполнить 3е задание к второй теме. Создадим тогда ветку `hw2_3`.

`git branch hw2_3`

Далее, перейдем в созданную ветку:

`git checkout hw2_3`

### 5. Выполните задание

В репозитории есть папки под каждую тему. В каждой из таких папок находятся папки под каждое из заданий темы.

Теперь сделайте то, что требуется в задании.

Добавьте все ваши изменения.

`git add .`

Сделайте коммит

`git commit -m "Complete task 3 homework 2"`

Сделайте `push`

`git push origin hw2_3`

### 6. Создайте pull-реквест

В репозитории у вас должно появится окошко с кнопкой

Нажмите "Compare & pull request".

Если такое окошко не появилось, нажмите на вкладку "branches", выберите нужную и нажмите "New pull request".

⚠️ Обязательно в качестве **base fork** выберите **СВОЙ** fork! ⚠️

Далее введите название для pull-реквеста. По желанию можете добавить комментарий. И нажимайте на кнопку "Create pull request".

### 7. Почти готово

Все, почти готово! Сбросьте ссылку на свой пулл-реквест в чате.

### 8. Обновление своего fork'a

Когда в оригинально репозитории будут появляться изменения, вам нужно будет обновлять свой fork. Увидеть появились ли какие-то изменения вы можете на странице своего репозитория:

Если вы видете такое сообщение, вам нужно смерджить изменения оригинального репозитория в свой. Это можно сделать  нажав прямо там же кнопку "Pull request".

Так же это можно сделать через терминал:

```
git checkout master
git pull https://github.com/dimondevs/vue-learn.git master
git push origin master
```
