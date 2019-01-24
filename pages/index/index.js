import React from 'react';
import { Layout, PageContainer } from 'components/layout';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {
	H1,
	H2,
	H3,
	H4,
	A,
	Img,
	Section,
	Block,
	Paragraph,
	Form,
	FormGroup,
	Button,
	Input,
} from 'components/general';
import SectionBackground from 'components/general/Section/Background';

class HomePage extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - HomePage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground bgColor="gradient">
					<PageContainer>
						<Section gridStart="992px">
							<Block flexBasis="40">
								<Paragraph>
									<Fade>
										<H1 light>Boost Your Operation</H1>
										<H3 light>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										</H3>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="60" align="flex-end">
								<Fade>
									<Img
										src="/static/images/oil-rig.png"
										alt=""
										className="img-fluid"
									/>
								</Fade>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TOP TEXT & IMAGE SECTION */}
				<SectionBackground bgColor="grey">
					<PageContainer>
						<Section>
							<Block flexBasis="50">
								<Paragraph bgColor="light" padding="4rem">
									<Fade>
										<H2>
											Simplify and Automate Through Innovations in Physics and
											AI
										</H2>

										<H4>
											To help the industrial sector thrive through the
											application of data-driven processes and cutting-edge AI
											technologies.
										</H4>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<Img
											src="/static/images/home-ai-logo.jpg"
											alt=""
											className="img-fluid w-100"
										/>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* FLEX DARK VIDEO SECTION */}
				<Section gridStart="1366px" bgColor="gradient" type="flex">
					<Block flexBasis="70">
						<video width="100%" autoPlay loop muted>
							<source src="/static/videos/ai-vid.mp4" type="video/mp4" />
						</video>
					</Block>
					<Block flexBasis="30">
						<Paragraph>
							<Fade>
								<H2 light>Accessibility</H2>
								<H4 light>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Molestias dolores quia sit harum accusamus quaerat
									repudiandae.
								</H4>
							</Fade>
						</Paragraph>
					</Block>
				</Section>

				{/* DUEL TEXT SECTION */}

				<SectionBackground bgColor="grey" className="pb-5 pt-5">
					<PageContainer>
						<Section>
							<Block flexBasis="100">
								<Paragraph>
									<H1 className="text-center">Some Message Goes Here</H1>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph bgColor="light" padding="4rem">
									<Fade>
										<H2>Product</H2>
										<H4>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae.
										</H4>
									</Fade>
								</Paragraph>
							</Block>

							<Block flexBasis="50">
								<Paragraph bgColor="light" padding="4rem">
									<Fade>
										<H2>Solution</H2>
										<H4>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae.
										</H4>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* PARTNER LOGO SECTION */}
				<SectionBackground className="partners-block pb-5">
					<PageContainer>
						<Section gridStart="300px">
							<Block flexBasis="100">
								<Paragraph>
									<H2 className="text-center">
										We Strive for Cutting-Edge Solutions Through our Strategic
										High-Tech Partnerships
									</H2>
								</Paragraph>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-1.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-2.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-3.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-4.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
							<Block flexBasis="20" className="text-center">
								<Zoom>
									<A>
										<Img
											src="/static/images/partner-logo-5.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Zoom>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* FORM SECTION */}
				<SectionBackground bgColor="blue">
					<PageContainer>
						<Section gridStart="767px">
							<Block flexBasis="66">
								<Paragraph className="home-subscription">
									<Fade bottom cascade>
										<H1 light>More to Come!</H1>
										<H3 light>
											Sign up for our newsletter to get the latest product
											announcements
										</H3>
										<Form inline>
											<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
												<Input
													type="email"
													name="email"
													id="email-input"
													placeholder="Your Email"
												/>
											</FormGroup>
											<Button color="danger">Submit</Button>
										</Form>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="33">
								<Paragraph>
									<Fade>
										<Img
											src="/static/images/home-post-box.png"
											alt=""
											className="img-fluid w-100 d-none d-md-block"
										/>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}
export default HomePage;
