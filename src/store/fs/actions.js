import buildJson from 'utils/fsRequest';

export const fsCustomEvent = eventData => {
  if (!eventData.eventName) {
    return;
  }

  return dispatch => {
    let json = buildJson(eventData.eventProperties);
    window.FS.event(eventData.eventName, json);
  };
};
