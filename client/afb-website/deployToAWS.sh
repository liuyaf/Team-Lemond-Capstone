#!/usr/bin/env sh
sh pushDocker.sh

ssh -i ~/.ssh/afbAWSkeypair.pem ec2-user@ec2-3-15-53-39.us-east-2.compute.amazonaws.com 'bash -s' <<EOF

docker rm -f test
docker pull liuyaf/afb-website

docker run -d --name test -p 80:80 -p 443:443 -v /etc/letsencrypt:/etc/letsencrypt:ro liuyaf/afb-website

exit
EOF