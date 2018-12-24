import { code as base } from 'mdx-deck/themes';

export default {
  ...base,
  css: {
    ...base.css,
    pre: {
      ...base.css.pre,
      padding: '10px 15px',
      borderRadius: '8px',
    },
    code: {
      ...base.css.code,
      padding: '3px 15px 2px',
      borderRadius: '8px',
    },
  },
  colors: {
    ...base.colors,
    code: 'white',
    codeBackground: '#333',
    link: 'white',
  },
};
