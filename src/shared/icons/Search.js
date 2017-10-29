import React, { PureComponent } from 'react';
import cx from 'classnames';

class SearchIcon extends PureComponent {
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
        height="18px"
        viewBox="0 0 18 18"
        onClick={this.onClick}>
        <g id="Styleguide" stroke="none" strokeWidth="1" fillRule="evenodd">
          <g id="Styleguide-SafeHarbor" transform="translate(-810.000000, -1751.000000)">
            <g id="ic-search" transform="translate(807.000000, 1748.000000)">
              <path
                d="M15.5,14 L14.71,14 L14.43,13.73 C15.41,12.59 16,11.11 16,9.5 C16,5.91 13.09,3 9.5,3 C5.91,3 3,5.91 3,9.5 C3,13.09 5.91,16 9.5,16 C11.11,16 12.59,15.41 13.73,14.43 L14,14.71 L14,15.5 L19,20.49 L20.49,19 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z"
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

export default SearchIcon;
