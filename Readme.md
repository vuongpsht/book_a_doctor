###1. Pull repo

```shell
git clone git@github.com:vuongpsht/book_a_doctor.git
```

###2. Install dependence

```shell
cd book_a_doctor
yarn && cd ios/ && pod install
```

###3. Run project
- Android
```shell
yarn android
```
- IOS run on the latest simulator like Iphone 12

```shell
yarn ios
```

- IOS run on Iphone 8

```shell
yarn i8
```

###4. Lint & test

```shell
yarn test
```

###5. Remove dependencies for zip

```shell
yarn zip
```
