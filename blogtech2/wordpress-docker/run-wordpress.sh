
echo "Running Docker on http://localhost:8000"
docker compose up -d

# echo "Stopping Docker"
# docker compose down

# echo "Removing Docker"
# docker compose down -v

# echo "Removing Docker Images"
# docker rmi $(docker images -q)

# echo "Removing Docker Volumes"
# docker volume rm $(docker volume ls -q)

# Admin - http://localhost:8000/wp-admin
# User: tiagorm
# Pass: trodrigues