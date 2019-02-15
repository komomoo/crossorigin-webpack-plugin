version=$(node -p "const { version } = require('./package.json'); version")

git checkout master

# 提交
git add -A
standard-version --commit-all --release-as $version
git push --tags origin master

# 推送
npm publish --registry=https://registry.npmjs.org
