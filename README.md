# Hello Rails-React
> The Hello Rails-React app is a first approach to using simultaneously Rails and React in the same project using the `jsbundling-rails` gem configured with Webpack. The app displays a random greeting from a PostgreSQL database. Built with Ruby on Rails and React.js.

## 🛠️ Built With

- Ruby on Rails
- React.js
- Webpack
- PostsgreSQL

## 🧮 Prerequisites

### Install
- Node.js
- Yarn
- Ruby
- Ruby on Rails

### Setup

Follow these steps on your console to properly clone this repository on your desktop:

```
$ cd desktop
$ git clone 'repo_path'
$ cd 'repo_name'
$ code .
Run 'ruby file_name' to see outputs in the console.
Run 'rubocop' to check linter offenses.
```

If you create a new rails application you can create the app with the following command:
```
rails new my_new_rails_app -j webpack --git --database=postgresql -T
```
If you already have a rails application you can setup the app with the following command:
```
rails new . -j webpack --git --database=postgresql -T
```

Create database for the project with `bin/rails db:create`, otherwise create databases manually in PostgreSQL.

If necessary, add username and password in `config/database.yml` for development and test:
```
development:
  <<: *default
  database: Hello_rails_react_development
  host: ''
  username:
  password:
  
  test:
  <<: *default
  database: Hello_rails_react_test
  username:
  password:
```
- Ensure the following steps are completed:
  - Add `jsbundling-rails` to your Gemfile with `gem 'jsbundling-rails'`
  - Run `./bin/bundle install`
  - Run `./bin/rails javascript:install:webpack`
  - Install needed node dependencies:
```
yarn add react react-dom
yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader --dev
```
- Create a `babel.config.js` in the root folder of your project, containing:
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
};
```

- Update `webpack.config.js` to include the babel loader:
```
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    application: './app/javascript/application.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, 'app/assets/builds'),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
```

- Generate a controller and view to serve your new react app:
```
rails g controller Root index
```

- Overwrite the contents of app/views/root/index.html.erb with:
```
<div id="root">
```

- Change the root in config/routes.rb to your new view:
```
Rails.application.routes.draw do
  root 'root#index'
end
```

- Add your React app to `app/javascript/application.js`:
```
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (<h1>Hello World!</h1>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
```

- Finally, if you are working on Windows ensure your `Procfile.dev` specifies the execution program for the `bin/rails` file, in this case, ruby:
```
web: ruby bin/rails server -p 3000
js: yarn build --watch

```

- Run your application to see all content with `./bin/dev`

## 👤 Author

### Mike Martínez

- GitHub: [@mikemtzp](https://github.com/mikemtzp)
- Twitter: [@mikemtzp](https://twitter.com/mikemtzp)
- LinkedIn: [Mike Martínez](https://www.linkedin.com/in/mike-mart%C3%ADnez/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/mikemtzp/Hello_rails_react/issues).

## ⭐️ Show your support

Give a ⭐️ if you like this project!

## 🥇 Acknowledgments

- This README.md was elaborated with the [Microverse readme-template](https://github.com/microverseinc/readme-template)

## 📝 License

[MIT License](https://github.com/mikemtzp/Hello_rails_react/blob/dev/LICENSE)
