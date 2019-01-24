import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import { H4, H5, Img } from 'components/general';
import { blueGradient } from 'components/theme/DeepCast/gradients';

const MainNavbar = styled(Navbar)`
	background: ${blueGradient};
	.navbar-collapse {
		height: 100vh;
		width: 100vw;
		background: rgba(0, 0, 0, 0.5);
	}
	.navbar-toggler {
		border: 2px solid dodgerblue;
		background: dodgerblue;
		padding: 0.5rem;
	}
	.nav-item {
		border-bottom: 1px solid dodgerblue;
		padding: 2rem;
		font-size: 1.5rem;
		text-align: center;
	}
`;
const DCLogo = styled.div`
	margin-top: 5px;
	img {
		width: 15% !important;
		margin-top: -5px;
	}
	h4 {
		font-weight: 700;
		color: dodgerblue;
		margin-top: 5px;

		@media (max-width: 500px) {
			font-size: 1.2rem;
		}
	}
	h5 {
		font-weight: 600;
		color: red;
		@media (max-width: 500px) {
			font-size: 1rem;
		}
	}
`;
export class MainNav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<div>
				<MainNavbar color="dark" dark className="fixed-top">
					<Link prefetch href="/" passHref>
						<NavbarBrand>
							<DCLogo>
								<Img
									src="/images/deepcast-logo.png"
									alt=""
									className="img-fluid"
								/>
								<H4 light className="d-inline">
									DeepCast
								</H4>
								<H5 light className="d-inline">
									.ai
								</H5>
							</DCLogo>
						</NavbarBrand>
					</Link>
					<NavbarToggler
						aria-label="mobile navigation toggle button"
						onClick={this.toggle}
					/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link prefetch href="/" passHref>
									<NavLink>Home</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/product" passHref>
									<NavLink>Product</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/solutions" passHref>
									<NavLink>Solutions</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/media" passHref>
									<NavLink>Media</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/about" passHref>
									<NavLink>About</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/sendgrid" passHref>
									<NavLink>SendGrid</NavLink>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</MainNavbar>
			</div>
		);
	}
}

export default MainNav;
