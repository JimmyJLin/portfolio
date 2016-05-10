# React Redux Webpack Node

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#### References
##### This boilerplate is a simple hello worl app version of [[react-webpack-node]](https://github.com/choonkending/react-webpack-node) from [[Ken Ding]](https://github.com/choonkending).

#### Demo Site:

[https://react-deployment.herokuapp.com](https://react-deployment.herokuapp.com)

#### Features
- React.js
- Redux
- React Router
- Webpack

## Instructions

### Prerequisites

> If you wish to run this app **without installing/running a database**, you can easily do so. Read more [here](https://github.com/choonkending/react-webpack-node/blob/master/docs/databases.md).

**Install MongoDB as your database**:

```bash
# Update brew formulae
brew update
# Install MongoDB
brew install mongodb
```

If you hate MongoDB with a passion and would like to see a postgresql example, check [this](https://github.com/choonkending/react-webpack-node/blob/master/docs/databases.md) out!

**Setup your mongoDB directory**

Note: Make sure you have the directory and its permissions setup (i.e. `/data/db`):
```bash
sudo mkdir -p /data/db
sudo chown -R `id -u` /data/db
```

**Run your mongoDB server**
```bash
mongod
```

### Build & Dev

**Installation**
```bash
# Install node modules - this includes those for production and development
# You only need to do this once :)
npm install
```

**Development**

```bash
# Starts the server with Hot Reloading
# Run webpack through webpack.config.dev.js
npm run dev

```

**Production**

Run the commands below for a production build, i.e. what is deployed to Heroku. If you are deploying to Heroku or similar, we assume that you serving the pages over HTTPS.

```bash
# Clean public folder
# Run webpack through webpack.config.prod.js
npm run build

# Start server
## Note: You need MongoDB running
npm start
```

**Deployment**

Heroku
```bash
heroku create

# Deploy to Heroku server
git push heroku master

# Database on Heroku
heroku addons:add mongohq
# or
heroku addons:add mongolab

# OPTIONAL:

# Rename if you need to
heroku app:rename <newname>

# Open Link in browser
heroku open

```
