# gatsby-plugin-babel

Simple Gatsby plugin that helps extend the `.babelrc`

## Install

```bash
npm install gatsby-plugin-babel
```

## Usage

Configure options in your `gatsby-config.js` file.

```javascript
plugins: [
  {
    resolve: 'gatsby-plugin-babel',
    options: {
      plugins: ['transform-react-jsx'],
      ignore: ['foo.js', 'bar/**/*.js'],
    },
  },
];
```
