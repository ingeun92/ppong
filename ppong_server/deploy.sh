#!/bin/bash

# 1. build process
HOST="ubuntu@15.164.231.39"
REGISTRY="999446963004.dkr.ecr.ap-northeast-2.amazonaws.com/ing_server"

export AWS_ACCESS_KEY_ID=AKIA6RM5OMM6PY5SETF3
export AWS_SECRET_ACCESS_KEY=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

$(aws ecr get-login --no-include-email --region ap-northeast-2)
docker build -t ing_server .
docker tag ing_server:latest $REGISTRY:latest
docker push $REGISTRY:latest

sleep 5;

# 2. deploy process
ssh -i ./ing_server.pem $HOST 'sudo $(sudo aws ecr get-login --no-include-email --region ap-northeast-2)'
ssh -i ./ing_server.pem $HOST 'sudo docker pull 999446963004.dkr.ecr.ap-northeast-2.amazonaws.com/ing_server:latest'
ssh -i ./ing_server.pem $HOST 'sudo docker stop ing_server'
ssh -i ./ing_server.pem $HOST 'sudo docker rm ing_server'
ssh -i ./ing_server.pem $HOST 'sudo docker run -d --net=host --restart=always --name=ing_server 999446963004.dkr.ecr.ap-northeast-2.amazonaws.com/ing_server:latest'
