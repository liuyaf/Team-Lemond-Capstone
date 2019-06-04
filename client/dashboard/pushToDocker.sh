#!/usr/bin/env sh
npm run build
# login to agefriendlysea docker account
cat ~/Desktop/afbdockerpw.txt | docker login --username agefriendlysea --password-stdin
docker build -t agefriendlysea/afb-dashboard .
docker push agefriendlysea/afb-dashboard
# code switching back to your own docker account
cat ~/.ssh/docker.pem | docker login --username liuyaf --password-stdin
docker build -t liuyaf/afb-dashboard .
docker push liuyaf/afb-dashboard