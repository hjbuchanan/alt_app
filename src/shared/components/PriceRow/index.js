import React, { PureComponent } from 'react';
import cx from 'classnames';
import { Button } from 'shared/components';
import { ArrowIcon } from 'shared/icons';

import './styles.css';

class PriceRow extends PureComponent {
  state = {
    open: false,
  };

  get keys() {
    return ['close', 'high', 'low', 'open'];
  }

  render() {
    const { close, time } = this.props.main;
    const date = new Date(time * 1000);

    return (
      <section
        className={cx('PriceRow', { 'is-max': this.props.isMax, 'is-min': this.props.isMin })}
        onClick={() => this.setState({ open: !this.state.open })}>
        <div className="PriceRow-header">
          <div className="PriceRow-left">
            <h3 className="PriceRow-name">{close}</h3>
            <span className="PriceRow-email">{date.toLocaleString()}</span>
          </div>
          <Button
            className="Button--orange"
            isTransparent
            icon={<ArrowIcon className={cx('PriceRow-icon', { 'is-active': this.state.open })} />}
          />
        </div>
        <div className={cx('PriceRow-content', { 'is-open': this.state.open })}>
          {this.props.main && (
            <div className="PriceRow-block">
              <h4 className="PriceRow-subtitle">CCCAGG</h4>
              {this.keys.map(key => (
                <div className="PriceRow-row">
                  <span className="PriceRow-metaLabel">{key}</span>
                  <span className="PriceRow-metaValue">{this.props.main[key] || 'N/A'}</span>
                </div>
              ))}
            </div>
          )}

          {this.props.kraken && (
            <div className="PriceRow-block">
              <h4 className="PriceRow-subtitle">Kraken</h4>
              {this.keys.map(key => (
                <div className="PriceRow-row">
                  <span className="PriceRow-metaLabel">{key}</span>
                  <span className="PriceRow-metaValue">{this.props.kraken[key] || 'N/A'}</span>
                </div>
              ))}
            </div>
          )}

          {this.props.bittrex && (
            <div className="PriceRow-block">
              <h4 className="PriceRow-subtitle">Bittrex</h4>
              {this.keys.map(key => (
                <div className="PriceRow-row">
                  <span className="PriceRow-metaLabel">{key}</span>
                  <span className="PriceRow-metaValue">{this.props.bittrex[key] || 'N/A'}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default PriceRow;
