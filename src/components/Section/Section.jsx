import PropTypes from 'prop-types';
import { Box } from 'components/Box';
// import {theme} from '../../utils'

export const Section = ({ title,  children }) => (
  <Box
    display="flex"
    flexWrap="wrap"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
     
  >
    <h2 >{title}</h2>
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
