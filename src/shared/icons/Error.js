import React, { PureComponent } from 'react';
import cx from 'classnames';


class ErrorIcon extends PureComponent{
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
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        onClick={this.onClick}
      >
        <g id="Styleguide" stroke="none" strokeWidth="1" fillRule="evenodd">
          <g id="Styleguide-SafeHarbor" transform="translate(-808.000000, -2126.000000)">
            <g id="ic-error" transform="translate(806.000000, 2124.000000)">
              <path
                d={`M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52
                  22,12 C22,6.48 17.52,2 12,2 Z M13,17 L11,17 L11,15 L13,15 L13,17 Z
                  M13,13 L11,13 L11,7 L13,7 L13,13 Z`}
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

export default ErrorIcon;