import React, { PureComponent } from 'react';
import cx from 'classnames';

import './styles.css';

export class Button extends PureComponent {
  static defaultProps = {
    align: 'center',
    disabled: false,
    isIconLeftAligned: true,
    style: {},
    type: 'button',
  };

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
    const {
      align,
      className,
      disabled,
      loading,
      isIconLeftAligned,
      isLong,
      isPrimary,
      isTransparent,
      isSecondary,
      style,
      text,
      type,
    } = this.props;

    return (
      <button
        className={cx('Button', className, {
          'is-disabled': disabled,
          'Button--primary': isPrimary,
          'Button--secondary': isSecondary,
          'Button--transparent': isTransparent,
          'Button--long': isLong,
        })}
        disabled={disabled || loading}
        type={type}
        onClick={this.onClick}
        style={style}>
        <span
          className={cx('Button-flex', {
            'Button-flex--center': align === 'center',
            'Button-flex--left': align === 'left',
            'Button-flex--right': align === 'right',
          })}>
          {!loading && isIconLeftAligned === true && this.props.icon}
          {text && <span className="Button-text">{text}</span>}
          {!loading && isIconLeftAligned === false && this.props.icon}
          {this.props.children}
        </span>
      </button>
    );
  }
}

export default Button;
