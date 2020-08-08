const processCount = 1;


module.exports = [{
  script: 'vag.js',
  name: 'app',
  exec_mode: 'cluster',
  instances: processCount,
  error_file: 'err.log',
  out_file: 'out.log',
  log_file: 'combined.log',
}];
