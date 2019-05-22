#!/usr/bin/env sh
npm run build
docker build -t liuyaf/afb-website .
docker push liuyaf/afb-website