let BASE_URL = '';
let BASE_NAME = '';
let TIME_OUT: number;
switch (process.env.NODE_ENV) {
  case 'production':
    production();
    break;
  case 'development':
    development();
    break;
  case 'test':
    test();
    break;
  default:
    production();
}

function production() {
  BASE_URL = 'https://mock.yonyoucloud.com/mock/22010';
  BASE_NAME = 'axb';
  TIME_OUT = 10000;
}
function development() {
  BASE_URL = 'https://mock.yonyoucloud.com/mock/22010';
  BASE_NAME = 'axb';
  TIME_OUT = 10000;
}
function test() {
  BASE_URL = 'https://mock.yonyoucloud.com/mock/22010';
  BASE_NAME = 'axb';
  TIME_OUT = 10000;
}

export { BASE_URL, BASE_NAME, TIME_OUT };
