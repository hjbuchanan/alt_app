import React, { Component } from 'react';
import cx from 'classnames';

import { ErrorIcon, SuccessIcon, CloseIcon } from 'shared/icons';

import './styles.css';

class FlashMessage extends Component {
  render() {
    const { data, isVisible, clear } = this.props;

    return (
      <div
        className={cx('FlashMessage', {
          'FlashMessage--success': data.type === 'success',
          'FlashMessage--error': data.type === 'error',
          'is-visible': isVisible
        })}
      >
        {data.type === 'error' ? (
          <ErrorIcon className="FlashMessage-errorIcon" />
        ) : (
          <SuccessIcon className="FlashMessage-successIcon" />
        )}
        <span className="FlashMessage-text">{data.message}</span>

        <CloseIcon className="FlashMessage-closeIcon" onClick={clear} />
      </div>
    )
  }
}

export default FlashMessage;