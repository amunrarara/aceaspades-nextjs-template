module.exports = {
  '**/*.{ts,tsx}': () => 'tsc --noEmit',
  '*.{js,jsx,ts,tsx}': ['eslint --fix .'],
  '*.json': ['prettier --write'],
};
