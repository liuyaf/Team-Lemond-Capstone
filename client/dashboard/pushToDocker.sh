#!/usr/bin/env sh
npm run build
# login to agefriendlysea docker account
cat ~/Desktop/afbdockerpw.txt | docker login --username agefriendlysea --password-stdin
docker build -t agefriendlysea/afb-dashboard .
docker push agefriendlysea/afb-dashboard