import React from 'react';
import styled from 'styled-components';


const Bottom = styled.footer`
  display: flex;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.base};
  padding: 20px;
`;

const Footer = () => {
  return (
    <Bottom>
      <h3>Footer</h3>
    </Bottom>
  )
};

export default Footer;