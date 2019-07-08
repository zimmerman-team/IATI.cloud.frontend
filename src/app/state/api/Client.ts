import { createClient } from 'react-fetching-library';

import { requestHostInterceptor } from './interceptors/requestHostInterceptor';

// In real application this const will be stored in ENV's
const HOST = 'http://localhost:3000/';

export const Client = createClient({
  requestInterceptors: [requestHostInterceptor(HOST)]
});
