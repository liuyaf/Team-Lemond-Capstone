#!/usr/bin/env sh

# login to agefriendlysea docker account
cat ~/Desktop/afbdockerpw.txt | docker login --username agefriendlysea --password-stdin
docker build -t agefriendlysea/afbserver .
docker push agefriendlysea/afbserver
# code switching back to your own docker account
cat ~/.ssh/docker.pem | docker login --username liuyaf --password-stdin
docker build -t liuyaf/afbserver .
docker push liuyaf/afbserver