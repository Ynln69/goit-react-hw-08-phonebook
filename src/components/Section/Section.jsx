import PropTypes from 'prop-types';
import { SectionBox, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionBox>
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </SectionBox>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Section;
