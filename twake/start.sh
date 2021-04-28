cp -n docker-compose.yml.dist docker-compose.yml
cp -nR default-configuration/ configuration/

docker-compose pull

docker-compose up -d scylladb
sleep 300 #Wait scylladb to startup
docker-compose up -d php rabbitmq
sleep 600 #Wait php to create tables in scylladb600
docker-compose up -d

#Git pull from fork branch
#git fetch fork
#git checkout -b fork_branch fork/<branch>