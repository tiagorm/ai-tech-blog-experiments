# Docker possui instruções de instalação específicas para cada sistema operativo.
# Podemos consultar a documentação oficial no https://docker.com/get-started/

# Puxar ou extrair a imagem de Docker da Node.js:
docker pull node:22-alpine

# Criar um contentor de Node.js e iniciar uma sessão de Shell:
docker run -it --rm --entrypoint sh node:22-alpine

# Consultar a versão da Node.js:
# node -v # Deveria imprimir "v22.18.0".

# Consultar a versão da npm:
# npm -v # Deveria imprimir "10.9.3".
