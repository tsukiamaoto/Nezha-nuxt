module.exports = {
  apps: [
    {
      name: 'NEZHA-NUXT',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
};
