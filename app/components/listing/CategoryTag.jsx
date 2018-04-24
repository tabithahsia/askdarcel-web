import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

class CategoryTag extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <Link className="tag block" to={`/search?q=${category.name}`}>
        <i className="material-icons">label</i> { category.name }
      </Link>
    );
  }
}

CategoryTag.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryTag;
