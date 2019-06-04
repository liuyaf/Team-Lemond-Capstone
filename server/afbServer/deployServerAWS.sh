#!/usr/bin/env sh

sh pushToDocker.sh



ssh -i ~/.ssh/afbIlluminage.pem ec2-user@ec2-3-15-111-64.us-east-2.compute.amazonaws.com 'bash -s' <<EOF

docker volume ls -qf dangling=true | xargs -r docker volume rm

export TLSCERT=/etc/letsencrypt/live/api.goagefriendly.org/fullchain.pem
export TLSKEY=/etc/letsencrypt/live/api.goagefriendly.org/privkey.pem

docker rm -f mongodb

docker rm -f afbserver

docker network rm serverNET

docker pull agefriendlysea/afbserver

docker network create serverNET

docker run -d --network serverNET -v /home/ec2-user/mongodblocal:/data/db --name mongodb mongo


docker run -d \
--network serverNET \
--name afbserver \
--link mongodb:mongodb \
-p 80:80 \
-p 443:443 \
-v /etc/letsencrypt:/etc/letsencrypt:ro \
-e TLSCERT=$TLSCERT \
-e TLSKEY=$TLSKEY \
agefriendlysea/afbserver

# docker run -d --network serverNET --name afbserver --link mongodb:mongodb -p 80:5100 agefriendlysea/afbserver
exit
EOF