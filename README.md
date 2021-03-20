# Time-To-Go-Out
![](https://github.com/kallechen/Time-To-Go-Out/actions/workflows/deploy_to_firebase.yml/badge.svg)

This application is used to help you find a place to go when you have no idea where to go.

### [Visit](https://time-to-go-out.web.app)

## Code Architecture

- src
    - actions: for redux action
    - reducers: for redux reducer
    - saga: for redux-saga
    - store: for redux store
    - api
        - fetch.js: fetcher class
    - components: all the components is in here
    - constant: store constant variables
        - actionType.js: for actions
        - cityName.js: city's english name and chineses name
        - envValue.js: for environment variables
        - routes.js: store the routing urls
    - utils
        - hooks: custom react hooks
        - theme.js: for material ui
        - vh.js: fix mobile vh problem
    - index.js

## Development

### Environment variables

```
REACT_APP_APP_ID = your MOTC Transport API App ID
REACT_APP_APP_KEY = your MOTC Transport API App Key
REACT_APP_DOMAIN = MOTC Transport API's Domain
```

### Run on local
```bash
git clone ...
cd ...
yarn install
yarn start
```