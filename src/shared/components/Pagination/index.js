import React, { Component } from 'react';
import Select from 'react-select';
import cx from 'classnames';

import { LeftIcon, RightIcon } from 'shared/icons';

require('./styles.css');

class Pagination extends Component {
  onPageSizeChange({ value }) {
    this.props.onPageSizeChange(value);
    window.scrollTo(0, 0);
  }

  onPageChange(nextPage) {
    const { total, onPageChange } = this.props;
    if (nextPage >= 1 && nextPage <= this.totalPages) {
      onPageChange(nextPage);
      window.scrollTo(0, 0);
    }
  }

  get rangeEnd() {
    const { page, total, pageSize } = this.props;
    const isEnd = page * pageSize > total;
    if (isEnd) {
      return total;
    }
    return page * pageSize;
  }

  get totalPages() {
    return Math.ceil(this.props.total / this.props.pageSize);
  }

  render() {
    const { page, total, type, pageSize } = this.props;

    return (
      <div className="Pagination is-active">
        <section className="Pagination-paging">
          <span className="Pagination-pagingLabel">
            {`${type.charAt(0).toUpperCase() + type.slice(1)} per page`}
          </span>
          <Select
            className="Pagination-select"
            clearable={false}
            onChange={result => this.onPageSizeChange(result)}
            placeholder={null}
            options={[20, 50, 100].map(o => ({ value: o, label: o }))}
            value={pageSize}
          />
        </section>
        <section className="Pagination-navigation">
          <LeftIcon className="Pagination-arrow" onClick={() => this.onPageChange(page - 1)} />
          <span className="Pagination-navText">page</span>
          <div className="Pagination-currentPage">{page || 1}</div>
          <span className="Pagination-navText">{`of ${this.totalPages}`}</span>
          <RightIcon className="Pagination-arrow" onClick={() => this.onPageChange(page + 1)} />
        </section>
        <section className="Pagination-summary">
          {`${1 + (page - 1) * pageSize}-${this.rangeEnd} of ${total} ${type}`}
        </section>
      </div>
    );
  }
}

export default Pagination;
