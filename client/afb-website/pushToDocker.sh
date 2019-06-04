#!/usr/bin/env sh
npm run build
# login to agefriendlysea docker account
cat ~/Desktop/afbdockerpw.txt | docker login --username agefriendlysea --password-stdin
docker build -t agefriendlysea/afb-website .
docker push agefriendlysea/afb-website
# code switching back to your own docker account
cat ~/.ssh/docker.pem | docker login --username liuyaf --password-stdin
docker build -t liuyaf/afb-website .
docker push liuyaf/afb-website