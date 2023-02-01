#!/bin/bash
. ${NVM_DIR}/nvm.sh && nvm install 14.21.2 && nvm use 14.21.2
sudo apt update --yes
# Install GraphViz for dependency graph visualization
sudo apt install graphviz
# Install Lazygit, an excellent terminal UI for git
LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | grep '"tag_name":' |  sed -E 's/.*"v*([^"]+)".*/\1/')
# curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz" # Intel
curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_arm64.tar.gz" # ARM / M1
sudo tar xf lazygit.tar.gz -C /usr/local/bin lazygit
lazygit --version
rm ${PWD}/lazygit.tar.gz
