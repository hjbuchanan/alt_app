import React, { PureComponent } from 'react';
import { Select } from 'shared/components';
import { SearchIcon } from 'shared/icons';

class CoinSearch extends PureComponent {
  render() {
    return (
      <div className="View-select-search-wrapper">
        <SearchIcon className="View-select-search" />
        <Select
          isIcon
          autosize={false}
          clearable={false}
          searchable={true}
          options={this.props.options || []}
          onChange={change => this.props.onChange(change)}
          placeholder="Search by Customer or User"
          value={this.props.coin || ''}
        />
      </div>
    );
  }
}

export default CoinSearch;
