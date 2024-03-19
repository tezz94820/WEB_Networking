module.exports = {
  apps : [{
    name:"Express app",
    script: 'server.js',
    instances:"MAX",
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
  }]
};
