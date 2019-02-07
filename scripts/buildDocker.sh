#!/bin/bash
export LDFLAGS=-L/usr/local/opt/openssl/lib
export CPPFLAGS=-I/usr/local/opt/openssl/include
set p = $(echo $PWD | awk -v h="scripts" '$0 ~h')
if [[ $PWD = */scripts ]]; then
 cd ..
fi
cd server
npm run clean
cd ../ui
ng build
cd ../server
npm run build
cd ..
# image for public docker hub
docker build -t ibmcase/kc-ui .
# image for private registry in IBM Cloud
docker tag ibmcase/kc-ui registry.ng.bluemix.net/ibmcaseeda/kc-ui
