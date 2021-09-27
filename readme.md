// TO ADD ApolloServer, GraphQl
npm install --dev
npx eslint --init

npx commitizen init cz-conventional-changelog --save-dev --save-exact

// ACTIVATE GIT HOOKS
npx husky install
// INSTALL commit-msg hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 
npm install --also=dev