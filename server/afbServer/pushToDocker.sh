#!/usr/bin/env sh

# login to agefriendlysea docker account
cat ~/Desktop/afbdockerpw.txt | docker login --username agefriendlysea --password-stdin
docker build -t agefriendlysea/afbserver .
docker push agefriendlysea/afbserver