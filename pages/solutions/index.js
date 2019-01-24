import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Layout, PageContainer, QuoteContainer } from 'components/layout';
import SectionBackground from 'components/general/Section/Background';
import {
	H1,
	H2,
	H3,
	H4,
	P,
	Button,
	Section,
	Block,
	Paragraph,
	Form,
	FormGroup,
	Input,
	Chart,
} from 'components/general';

const MagnifierBox = styled.div`
	* {
		box-sizing: border-box;
	}
	padding: 10rem;
	border: 1rem solid #434343;
	border-radius: 50%;

	background: url(/static/images/solution-pg-block-bg.jpg) fixed;
	background-position: center center;
	background-size: 160%;

	@media screen and (max-width: 640px) {
		padding: 8rem;
	}
`;

class Solutions extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - Solutions Page"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground
					bgImgLink="/static/images/solution-header-2.jpg"
					parallax
				>
					<PageContainer>
						<Section>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<H1 light>Advanced Stuff</H1>
										<H3 light>
											For operators looking to partner to build cutting edge
											solutions
										</H3>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph />
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEXT & IMAGE BLOCK 1 */}
				<SectionBackground bgColor="dark">
					<PageContainer>
						<Section>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<Chart type="wave" />
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<H2 light className="mb-3">
											Automatic Forecasting
										</H2>
										<H4 light>
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

				{/* TEXT & IMAGE BLOCK 2 WITH PARALAX BACKGROUND */}
				<SectionBackground
					bgImgLink="/static/images/solution-pg-block-bg.jpg"
					parallax
				>
					<PageContainer>
						<Section>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<H2 light className="mb-3">
											Deeper Insights
										</H2>
										<H4 light>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae. repudiandae.
										</H4>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<MagnifierBox />
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEXT & IMAGE BLOCK 3 */}
				<SectionBackground bgColor="dark">
					<PageContainer>
						<Section>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<Chart type="stream" />
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<H2 light className="mb-3">
											Deeper Insights
										</H2>
										<H4 light>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											Molestias repudiandae.
										</H4>
										<P className="mt-3">
											<Button color="danger" className="btn-lg">
												Request Demo
											</Button>
										</P>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* CUSTOMER QUOTE BLOCK */}
				<SectionBackground bgColor="dimgray">
					<PageContainer>
						<Section gridStart="992px">
							<Block flexBasis="100">
								<Paragraph>
									<H1 light className="text-center mt-5">
										What Our Customers Say
									</H1>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph>
									<QuoteContainer>
										<Fade bottom cascade>
											<P light>
												The secret of getting ahead is getting started. The
												secret of getting started is breaking your complex
												overwhelming tasks into small manageable tasks, and
												starting on the first one.
											</P>
											<div className="pull-right cite">-- Mark Twain</div>
										</Fade>
									</QuoteContainer>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph>
									<QuoteContainer>
										<Fade bottom cascade>
											<P light>
												The secret of getting ahead is getting started. The
												secret of getting started is breaking your complex
												overwhelming tasks into small manageable tasks, and
												starting on the first one.
											</P>
											<div className="pull-right cite">-- Mark Twain</div>
										</Fade>
									</QuoteContainer>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* FORM SECTION */}
				<SectionBackground bgColor="dark">
					<PageContainer>
						<Section>
							<Block flexBasis="100">
								<Paragraph className="text-center">
									<Fade bottom cascade>
										<H1 light>Subscribe Now!</H1>
										<H3 light>
											Sign up for our newsletter to get the latest product
											announcements
										</H3>
										<Form className="col-md-6 mx-auto mt-3">
											<FormGroup className="">
												<Input
													type="email"
													name="email"
													id="email-input"
													placeholder="Your Email"
													className="form-control"
												/>
											</FormGroup>
											<Button color="danger" className="btn-lg">
												Submit
											</Button>
										</Form>
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

export default Solutions;
