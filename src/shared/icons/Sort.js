import React, { PureComponent } from 'react';
import cx from 'classnames';

class SortIcon extends PureComponent {
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
        width="18px"
        height="12px"
        viewBox="0 0 18 12"
        onClick={this.onClick}>
        <g id="Styleguide" stroke="none" strokeWidth="1" fillRule="evenodd">
          <g id="Styleguide-SafeHarbor" transform="translate(-810.000000, -1960.000000)">
            <g id="ic-sort" transform="translate(807.000000, 1954.000000)">
              <path
                d={`M3,18 L9,18 L9,16 L3,16 L3,18 Z M3,6 L3,8 L21,8 L21,6 L3,6
                        Z M3,13 L15,13 L15,11 L3,11 L3,13 Z`}
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

export default SortIcon;
