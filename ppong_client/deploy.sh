#!/bin/bash
npm run-script build

# 1. build process
HOST="ubuntu@15.164.80.238"
REGISTRY="999446963004.dkr.ecr.ap-northeast-2.amazonaws.com/ing_client"

export AWS_ACCESS_KEY_ID=AKIA6RM5OMM6PY5SETF3
export AWS_SECRET_ACCESS_KEY=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

$(aws ecr get-login --no-include-email --region ap-northeast-2)
docker build -t ing_client .
docker tag ing_client:latest $REGISTRY:latest
docker push $REGISTRY:latest

sleep 5;

# 2. deploy process
ssh -i ./ing_client.pem $HOST 'sudo $(sudo aws ecr get-login --no-include-email --region ap-northeast-2)'
ssh -i ./ing_client.pem $HOST 'sudo docker pull 999446963004.dkr.ecr.ap-northeast-2.amazonaws.com/ing_client:latest'
ssh -i ./ing_client.pem $HOST 'sudo docker stop ing_client'
ssh -i ./ing_client.pem $HOST 'sudo docker rm ing_client'
ssh -i ./ing_client.pem $HOST 'sudo docker run -d --net=host --restart=always --name=ing_client 999446963004.dkr.ecr.ap-northeast-2.amazonaws.com/ing_client:latest'
