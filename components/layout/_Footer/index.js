import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	flex: 0;
	flex-shrink: 0;
`;

export const Footer = ({ children }) => (
	<FooterContainer>{children}</FooterContainer>
);

export default Footer;
