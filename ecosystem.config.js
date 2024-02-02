module.exports = {
  apps: [
    {
      name: 'FridevIII',
      script: 'index.js',
      instances: 3,
      exec_mode: 'cluster',
      watch: true,
      increment_var: 'PORT',
      env: {
        PORT: 8000 // 8000-8002
      }
    }
  ]
};