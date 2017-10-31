import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { removeFlash } from 'store/flash/actions';
import { ErrorIcon, SuccessIcon, CloseIcon } from 'shared/icons';

import './styles.css';

class FlashMessage extends Component {
  render() {
    const { visible, type, message, removeFlash } = this.props.flash;

    return (
      <div
        className={cx('FlashMessage', {
          'FlashMessage--success': type === 'success',
          'FlashMessage--error': type === 'error',
          'is-visible': visible,
        })}>
        {type === 'error' ? (
          <ErrorIcon className="FlashMessage-errorIcon" />
        ) : (
          <SuccessIcon className="FlashMessage-successIcon" />
        )}
        <span className="FlashMessage-text">{message}</span>

        <CloseIcon className="FlashMessage-closeIcon" onClick={removeFlash} />
      </div>
    );
  }
}

export default connect(({ flash }) => ({ flash }), { removeFlash })(FlashMessage);
