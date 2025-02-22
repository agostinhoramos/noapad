#!/bin/sh

# Function to run npm run dev in the background
run_dev_bg() {
  cd $1
  npm install -g npm@latest
  npm install
  sudo rm -rf .next/
  npm run dev &
  cd ..
}

# Function to run npm run prod in the background
run_prod_bg() {
  cd $1
  npm install -g npm@latest
  npm install
  sudo rm -rf .next/
  npm run build
  npm run start &
  cd ..
}

# *** Main
# Run npm run dev for each project in the background
if [ "$1" = "dev" ]; then
    run_dev_bg "ui"
else
    run_prod_bg "ui"
fi

# Keep the script running to allow background processes to continue
wait