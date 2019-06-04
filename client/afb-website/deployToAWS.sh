#!/usr/bin/env sh
sh pushToDocker.sh


ssh -i ~/.ssh/afbIlluminage.pem ec2-user@ec2-3-15-66-213.us-east-2.compute.amazonaws.com 'bash -s' <<EOF
docker volume ls -qf dangling=true | xargs -r docker volume rm
docker rm -f afb-website
docker pull agefriendlysea/afb-website

docker run -d --name afb-website -p 80:80 -p 443:443 -v /etc/letsencrypt:/etc/letsencrypt:ro agefriendlysea/afb-website

exit
EOF
