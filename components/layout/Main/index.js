import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
	flex: 1 0 auto;
	flex-shrink: 0;
	width: 100%;
`;
export const Main = ({ children }) => <MainContainer>{children}</MainContainer>;

export default Main;
