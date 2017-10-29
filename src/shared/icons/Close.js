import React from 'react';
import cx from 'classnames';

class CloseIcon extends React.PureComponent {
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
        width="14px"
        height="14px"
        viewBox="0 0 14 14"
        onClick={this.onClick}
      >
        <g id="Styleguide" stroke="none" strokeWidth="1" fillRule="evenodd">
          <g id="Styleguide-SafeHarbor" transform="translate(-916.000000, -1753.000000)">
            <g id="ic-close" transform="translate(911.000000, 1748.000000)">
              <polygon
                id="Shape"
                fillRule="nonzero"
                points={`19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59
                         6.41 19 12 13.41 17.59 19 19 17.59 13.41 12`}
              />
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default CloseIcon;