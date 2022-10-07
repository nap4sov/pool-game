import React from 'react';
import PropTypes from 'prop-types';

const Lights = props => {
  const { type: Light } = props;

  return <Light {...props} />;
};

Lights.propTypes = {
  type: PropTypes.string,
};

Lights.defaultProps = {
  type: '',
};

export default Lights;
