module.exports = {
  apps: [{
    name: 'austinstotts.com',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-208-59-63.compute-1.amazonaws.com',
      key: '~/.ssh/austinstotts.pem',
      ref: 'origin/master',
      repo: 'git@github.com:austinStotts/austinstotts.com.git',
      path: '/home/ubuntu/austinstotts',
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}