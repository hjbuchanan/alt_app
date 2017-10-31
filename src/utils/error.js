import { flash } from 'store/flash/actions';
import store from 'store';

export default function gracefullHandleError(error) {
  if (error.response) {
    store.dispatch(flash({ message: 'Request failed. Please try again.', type: 'error' }));
  } else if (error.request) {
    store.dispatch(flash({ message: 'Request failed. Please try again.', type: 'error' }));
  } else {
    store.dispatch(flash({ message: 'Request failed. Please try again.', type: 'error' }));
  }

  return Promise.reject(error);
}
