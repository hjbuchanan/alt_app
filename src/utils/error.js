import { flash } from 'store/flash/actions';
import store from 'store';

export default function gracefullyHandleError(error) {
  if (error.response) {
    store.dispatch(
      flash({ message: 'Request failed. Please try again.', type: 'error' })
    );
  } else if (error.request) {
    store.dispatch(
      flash({ message: 'Request failed. Please try again.', type: 'error' })
    );
  } else {
    store.dispatch(
      flash({ message: 'Request failed. Please try again.', type: 'error' })
    );
  }

  Promise.reject(error);
}
