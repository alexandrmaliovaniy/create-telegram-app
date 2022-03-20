<h1 align="center">Create Telegram App</h1>
<div align="center">

Set up telegram bot dev environment with [Telegram Framework](https://github.com/alexandrmaliovaniy/telegram-framework).
</div>


## Install

```shell
    $ npx create-telegram-app <path> --typescript
    $ cd <path>
```

Note: flag `typescript` is optional, if it's absent - regular javascript project will be created

## Configuration

Specify telegram token in `.env` file

```javascript
    // .env file
    TELEGRAM_TOKEN=...
```

## Start

```shell
    $ npm start
```