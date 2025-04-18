/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'es5',
  tailwindFunctions: ['clsx', 'tw'],
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
