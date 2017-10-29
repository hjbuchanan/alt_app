import React, { PureComponent } from 'react';
import cx from 'classnames';


class SuccessIcon extends PureComponent {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    return (
      <svg
        className={cx('Icon', this.props.className)}
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        onClick={this.onClick}
      >
        <g id="Styleguide" stroke="none" strokeWidth="1" fillRule="evenodd">
          <g id="Styleguide-SafeHarbor" transform="translate(-918.000000, -1413.000000)">
            <g id="ic-resolve" transform="translate(917.000000, 1412.000000)">
              <path
                d="M9,1.5 C4.86,1.5 1.5,4.86 1.5,9 C1.5,13.14 4.86,16.5 9,16.5 C13.14,16.5 16.5,13.14 16.5,9 C16.5,4.86 13.14,1.5 9,1.5 Z M7.5,12.75 L3.75,9 L4.8075,7.9425 L7.5,10.6275 L13.1925,4.935 L14.25,6 L7.5,12.75 Z"
                id="Shape"
                fillRule="nonzero"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default SuccessIcon;