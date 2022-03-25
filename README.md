# for client side (react)
For creating reactjs project :

    npx install create-react-app my-app

    cd my-app

    npm start

# for server api side (express)
For creating expressjs project :

    npm init -y
    npm i express
    npm i --save-dev nodemon
     and then in pakage.json edit : 
            in script : "devstart": "nodemon server.js"
    for importing add : 
                "type": "module" after dependencies tag

    for running express : npm run devstart
