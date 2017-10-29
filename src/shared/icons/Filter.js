import React, { PureComponent } from 'react';
import cx from 'classnames';

class FilterIcon extends PureComponent {
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
          <g id="Styleguide-SafeHarbor" transform="translate(-811.000000, -1324.000000)">
            <g id="ic-filter" transform="translate(808.000000, 1318.000000)">
              <path
                d={`M10,18 L14,18 L14,16 L10,16 L10,18 Z M3,6 L3,8 L21,8 L21,6 L3,
                          6 Z M6,13 L18,13 L18,11 L6,11 L6,13 Z`}
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

export default FilterIcon;
