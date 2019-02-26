ionic start AulaSQLite sidemenu --type=”angular”


ionic cordova plugin add cordova-sqlite-storage
git add .
git commit -m “Install cordova Plugin cordova-sqlite-storage”

npm install --save @ionic-native/sqlite
git add .
git commit -m “Install ionic-native sqlite”

ionic cordova platform add android
git add .
git commit -m “Install cordova platform add android”
