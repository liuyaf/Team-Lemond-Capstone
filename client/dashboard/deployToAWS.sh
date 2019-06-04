#!/usr/bin/env sh
sh pushToDocker.sh

ssh -i ~/.ssh/afbIlluminage.pem ec2-user@ec2-18-218-203-136.us-east-2.compute.amazonaws.com 'bash -s' <<EOF

docker rm -f dashboard
docker pull agefriendlysea/afb-dashboard

docker run -d --name dashboard -p 80:80 -p 443:443 -v /etc/letsencrypt:/etc/letsencrypt:ro agefriendlysea/afb-dashboard

exit
EOF