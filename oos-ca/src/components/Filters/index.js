import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Text } from 'informed';
import { connect } from 'react-redux';

import { setFilters, clearFilters } from '../../actions/filters';

class Filters extends Component {
  render() {
    const {filters, setFilters, clearFilters} = this.props;  // eslint-disable-line
    return (
      <Form data-test="filters-container" id="filters" onSubmit={formState => setFilters(formState)}>
        Name:
        <Text field="name" data-test="filters-name-input" id="name" initialValue={filters.name} />
        City:
        <Text field="city" data-test="filters-city-input" id="city" initialValue={filters.city} />
        <button data-test="filters-submit" type="submit">Submit</button>
        <button data-test="filters-clear" type="button" onClick={clearFilters}>Clear</button>
      </Form>);
  }
}

Filters.defaultProps = {
  filters: null,
  setFilters: null,
  clearFilters: null,
};

Filters.propTypes = {
  filters: PropTypes.object,
  setFilters: PropTypes.func,
  clearFilters: PropTypes.func,
};

export default connect(({ filters }) => ({ filters }), { setFilters, clearFilters })(Filters);
