import React from 'react';
import { Layout, PageContainer } from 'components/layout';
import Fade from 'react-reveal/Fade';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  A,
  Img,
  Card,
  Section,
  Block,
  Paragraph,
} from 'components/general';
import SectionBackground from 'components/general/Section/Background';

class AboutPage extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - AboutPage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}
        <SectionBackground bgColor="gradient">
          <PageContainer>
            <Section>
              <Block flexflexBasis="100" className="text-center">
                <Paragraph>
                  <Fade>
                    <H1 light>Our Mission</H1>
                    <H3 light>
                      To help the industrial sector thrive through the
                      application of data-driven processes and cutting-edge AI
                      technologies.
                    </H3>
                  </Fade>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEAM MEMBER SECION 1 */}
        <SectionBackground bgColor="light" className="team-members">
          <PageContainer>
            <Section center gridStart="300px">
              <Block>
                <Paragraph>
                  <H2 className="text-center">Core Team</H2>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center member">
                  <Card imgSrc="static/images/team/hector.png" imgCircle>
                    <Fade>
                      <H4 bold>Hector Klie</H4>
                      <H5>CEO, Lead Data Scientist</H5>
                      <A
                        href="https://www.linkedin.com/in/hklie/"
                        target="_blank"
                      >
                        <Img src="static/images/linkedin-dark.png" alt="LinkedIn" />
                      </A>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center member">
                  <Card imgSrc="static/images/team/arturo.png" imgCircle>
                    <Fade>
                      <H4 bold>Arturo Klie</H4>
                      <H5>CTO, Sr. Software Engineer</H5>
                      <A
                        href="https://www.linkedin.com/in/klieart/"
                        target="_blank"
                      >
                        <Img src="static/images/linkedin-dark.png" alt="LinkedIn" />
                      </A>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center member">
                  <Card imgSrc="static/images/team/duc_le.png" imgCircle>
                    <Fade>
                      <H4 bold>Duc Le</H4>
                      <H5>Sr. Reservoir Engineer, Software Engineer</H5>
                      <A
                        href="https://www.linkedin.com/in/duchuule/"
                        target="_blank"
                      >
                        <Img src="static/images/linkedin-dark.png" alt="LinkedIn" />
                      </A>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center member">
                  <Card imgSrc="static/images/team/duc_vuong.png" imgCircle>
                    <Fade>
                      <H4 bold>Duc Vuong</H4>
                      <H5>Sr. Petroleum Engineer, Software Engineer</H5>
                      <A href="!#" target="_blank">
                        <Img src="static/images/linkedin-dark.png" alt="LinkedIn" />
                      </A>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center member">
                  <Card imgSrc="static/images/team/wei_ma.png" imgCircle>
                    <Fade>
                      <H4 bold>Wei Ma</H4>
                      <H5>Sr. Petroleum Engineer, Data Scientist</H5>
                      <A
                        href="https://www.linkedin.com/in/wei-ma-1b01b541/"
                        target="_blank"
                      >
                        <Img src="static/images/linkedin-dark.png" alt="LinkedIn" />
                      </A>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEAM MEMBER SECION 2 */}
        <SectionBackground bgColor="grey" className="team-members">
          <PageContainer>
            <Section center gridStart="300px">
              <Block>
                <Paragraph>
                  <H2 className="text-center">Advisors</H2>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center member">
                  <Card imgSrc="static/images/team/fetkovich.jpg" imgCircle>
                    <Fade>
                      <H4 bold>Mick Fetkovich</H4>
                      <H5>Petroleum Engineer Expert</H5>
                      <A
                        href="https://www.linkedin.com/in/mick-fetkovich-90013235/"
                        target="_blank"
                      >
                        <Img src="static/images/linkedin-dark.png" alt="LinkedIn" />
                      </A>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center member">
                  <Card imgSrc="static/images/team/advisor2.jpg" imgCircle>
                    <Fade>
                      <H4 bold>Yves Chevalier</H4>
                      <H5>Exploration Geosciences Expert</H5>
                      <A
                        href="https://www.linkedin.com/in/yves-m-r-chevalier-1b915451/"
                        target="_blank"
                      >
                        <Img src="static/images/linkedin-dark.png" alt="LinkedIn" />
                      </A>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center member">
                  <Card imgSrc="static/images/team/consultant5.png" imgCircle>
                    <Fade>
                      <H4 bold>Tan Nguyen</H4>
                      <H5>Drilling and Production Engineer Expert</H5>
                      <A
                        href="https://www.linkedin.com/in/tan-nguyen-031b8596/"
                        target="_blank"
                      >
                        <Img src="static/images/linkedin-dark.png" alt="LinkedIn" />
                      </A>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center member">
                  <Card imgSrc="static/images/team/reinaldo.png" imgCircle>
                    <Fade>
                      <H4 bold>Reinaldo Gonzalez</H4>
                      <H5>Geomodeling and Risk Analysis Expert</H5>
                      <A
                        href="https://www.linkedin.com/in/gonzalezreinaldo/"
                        target="_blank"
                      >
                        <Img src="static/images/linkedin-dark.png" alt="LinkedIn" />
                      </A>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
              <Block flexBasis="33">
                <Paragraph className="text-center member">
                  <Card imgSrc="static/images/team/consultant3.jpg" imgCircle>
                    <Fade>
                      <H4 bold>Horacio Florez</H4>
                      <H5>Computational Scientist and Geomechanics Expert</H5>
                      <A
                        href="https://www.linkedin.com/in/horacio-florez-87b37b24/"
                        target="_blank"
                      >
                        <Img src="static/images/linkedin-dark.png" alt="LinkedIn" />
                      </A>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>
      </Layout>
    );
  }
}
export default AboutPage;
