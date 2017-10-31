import React from 'react';
import cx from 'classnames';

class ArrowIcon extends React.PureComponent {
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
        width="13px"
        height="8px"
        viewBox="0 0 13 8"
        onClick={this.onClick}>
        <g id="Styleguide" stroke="none" strokeWidth="1" fillRule="evenodd">
          <g id="Styleguide-SafeHarbor" transform="translate(-813.000000, -1503.000000)">
            <g id="ic-ArrowDwn" transform="translate(807.000000, 1494.000000)">
              <polygon
                id="Shape"
                fillRule="nonzero"
                transform="translate(12.750000, 12.795000) rotate(-270.000000) translate(-12.750000, -12.795000) "
                points="9.045 17.385 13.625 12.795 9.045 8.205 10.455 6.795 16.455 12.795 10.455 18.795"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default ArrowIcon;
