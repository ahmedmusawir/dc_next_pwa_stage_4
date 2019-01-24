import React from 'react';
import { Layout } from 'components/layout';
import { Container, Row, Col, H1, HeroBlock } from 'components/general';
import {} from 'reactstrap';

class PageTemplate extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - PageTemplate"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<HeroBlock>
					<H1 light className="p-5">
						PageTemplate - <small>Copy me to start a page</small>
					</H1>
				</HeroBlock>
			</Layout>
		);
	}
}
export default PageTemplate;
