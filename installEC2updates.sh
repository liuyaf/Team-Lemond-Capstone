#!/usr/bin/env sh

# landing page
ssh -i ~/.ssh/afbIlluminage.pem ec2-user@ec2-3-15-66-213.us-east-2.compute.amazonaws.com 'bash -s' <<EOF

docker volume ls -qf dangling=true | xargs -r docker volume rm

sudo yum -y update
exit
EOF

# nodejs server
ssh -i ~/.ssh/afbIlluminage.pem ec2-user@ec2-3-15-111-64.us-east-2.compute.amazonaws.com 'bash -s' <<EOF
docker volume ls -qf dangling=true | xargs -r docker volume rm
sudo yum -y update
exit
EOF

# dashboard
ssh -i ~/.ssh/afbIlluminage.pem ec2-user@ec2-18-218-203-136.us-east-2.compute.amazonaws.com 'bash -s' <<EOF
docker volume ls -qf dangling=true | xargs -r docker volume rm
sudo yum -y update
exit
EOF

