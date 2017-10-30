import React, { PureComponent } from 'react';
import cx from 'classnames';

export default class RightArrow extends PureComponent {
  onClickHandler(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    return (
      <svg
        width="12px"
        height="12px"
        className={cx('Icon', this.props.className)}
        onClick={e => this.onClickHandler(e)}
        viewBox="0 0 9 9">
        <path d="M9 4.5L0 0v9z" />
      </svg>
    );
  }
}
