import http from 'k6/http';
import { sleep } from 'k6';

export default () => {
  const BASE_URL = __ENV.BASE_URL || 'fibo.fibo-staging.sv.cluster.local:80';
  http.get(`${BASE_URL}/calculate?num=40`);
  sleep(1);
};