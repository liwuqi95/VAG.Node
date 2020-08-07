const processCount = 1;


module.exports = [{
  script: 'vag.js',
  name: 'app',
  exec_mode: 'cluster',
  instances: processCount,
}];
