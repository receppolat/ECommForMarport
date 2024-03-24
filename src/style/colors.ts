const light = {
  global: {
    white: '#fff',
    green: 'green',
  },
  text: {
    brand: '#ab5413',
    primary: '#161e2b',
    secondary: '#6a717d',
    error: '#db3232',
  },
  title: {
    primary: '#15191f',
  },
  background: {
    primary: '#ebeff5',
    secondary: '#fff',
    brand: '#ab5413',
  },
  border: {
    primary: '#999999',
    secondary: '#ddd',
  },
  foreground: {
    tertiarry: '#aaa',
    brand: '#ab5413',
  },
};

const dark = {
  global: {
    white: '#fff',
    green: 'green',
  },
  text: {
    brand: '#ab5413',
    primary: '#f5f5f5',
    secondary: '#d5d5d5',
    error: '#db3232',
  },
  title: {
    primary: '#fff',
  },
  background: {
    primary: '#21201f',
    secondary: '#54504d',
    brand: '#ab5413',
  },
  border: {
    primary: '#ddd',
    secondary: '#999',
  },
  foreground: {
    tertiarry: '#b8a08f',
    brand: '#ab5413',
  },
};

const THEME: 'dark' | 'light' = 'dark';

const colors = THEME === 'dark' ? dark : light;

export {colors};
