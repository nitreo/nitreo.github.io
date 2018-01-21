npm run build &&^
git add -A &&^
git commit -m "Automated Build & Deploy" &&^
git push &&^
git subtree push --prefix www origin master
