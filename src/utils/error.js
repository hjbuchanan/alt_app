import { flash } from 'store/flash/actions';

export default function gracefullHandleError(error) {
  if (error.response) {
    flash({ message: 'Request failed. Please try again.' });
  } else if (error.request) {
    flash({ message: 'Request failed. Please try again.' });
  } else {
    flash({ message: 'Request failed. Please try again.' });
  }

  return Promise.reject(error);
}
