#!/usr/bin/env sh

sh pushServerDocker.sh

ssh -i ~/.ssh/afbAWSkeypair.pem ec2-user@ec2-3-15-60-228.us-east-2.compute.amazonaws.com 'bash -s' <<EOF


export TLSCERT=/etc/letsencrypt/live/api.liuyaf.me/fullchain.pem
export TLSKEY=/etc/letsencrypt/live/api.liuyaf.me/privkey.pem

docker rm -f mongodb

docker rm -f afbserver

docker network rm serverNET

docker pull liuyaf/afbserver

docker network create serverNET

docker run -d --network serverNET --name mongodb mongo


docker run -d \
--network serverNET \
--name afbserver \
--link mongodb:mongodb \
-p 443:443 \
-v /etc/letsencrypt:/etc/letsencrypt:ro \
-e TLSCERT=$TLSCERT \
-e TLSKEY=$TLSKEY \
liuyaf/afbserver

# docker run -d --network serverNET --name afbserver --link mongodb:mongodb -p 443:5100 liuyaf/afbserver
exit
EOF