import React, { Component } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Layout, HeaderTooltipBox, PageContainer } from 'components/layout';
import SectionBackground from 'components/general/Section/Background';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Img,
  Button,
  Card,
  Section,
  Block,
  Paragraph,
  Form,
  FormGroup,
  Input,
  Chart,
} from 'components/general';

const SwitchContainer = styled.div`
  text-align: center;
  margin: 100px auto;
  background: #f3f3f3;

  input[type='range'] {
    -webkit-appearance: none;
    background: #b8b7b8;
    width: 200px;
    height: 1rem;
    border-radius: 4px;
    position: relative;
    outline: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0.5, #007aff),
      color-stop(0.5, #b8b7b8)
    );
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #666;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
export class RangeSwitch extends Component {
  onChangeHandler = e => {
    const initValue = e.target.value;
    const min = e.target.min;
    const max = e.target.max;

    let value = (initValue - min) / (max - min);
    e.target.style.backgroundImage = [
      '-webkit-gradient(',
      'linear, ',
      'left top, ',
      'right top, ',
      'color-stop(' + value + ', #007aff), ',
      'color-stop(' + value + ', #b8b7b8)',
      ')',
    ].join('');
  };

  render() {
    return (
      <SwitchContainer>
        <input
          type="range"
          min="1"
          max="100"
          id="range"
          onChange={this.onChangeHandler}
        />
      </SwitchContainer>
    );
  }
}

class Product extends Component {
  render() {
    return (
      <Layout
        title="Deep Cast - AboutPage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}
        <SectionBackground bgImgLink="/static/images/forecast-header.jpg" parallax>
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade>
                    <H1 light>Expedite Field Analysis by 100x</H1>
                    <H3 light>
                      Some long subtitle text goes here. It would be a tagline
                      that describes the value of the software
                    </H3>
                  </Fade>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <HeaderTooltipBox>
                  <Fade>
                    <H4 bold className="text-center mb-3">
                      API: 1234567890
                    </H4>
                    <P>Some Information</P>
                    <P>More Information</P>
                    <P>Some Extra Information</P>
                    <P>Last set of Information</P>
                  </Fade>
                </HeaderTooltipBox>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEXT & IMAGE BLOCK 1 */}
        <SectionBackground>
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade>
                    <Chart type="line" />
                  </Fade>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade>
                    <H2>Automatic Forecasting</H2>
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

        {/* TEXT & IMAGE BLOCK 2 - Img Right */}
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade>
                    <H2>Quick Reservoir Insights</H2>
                    <H4>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias dolores quia sit harum accusamus quaerat
                      repudiandae.
                    </H4>
                  </Fade>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade>
                    <Section height="20rem">
                      <Block>
                        <Chart type="pie" />
                      </Block>
                      <Block>
                        <H6 className="text-center">Cut-off Time</H6>
                        <RangeSwitch />
                        <H5 className="text-center">Jan 2022</H5>
                      </Block>
                    </Section>
                  </Fade>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEXT & IMAGE BLOCK 3 */}
        <SectionBackground>
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade>
                    <Chart type="linezoom" />
                  </Fade>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade>
                    <H2>Automatic Forecasting</H2>
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

        {/* PRICING BLOCK  */}

        <SectionBackground bgColor="lightblue" className="pb-5">
          <PageContainer>
            <Block flexBasis="100">
              <Paragraph>
                <H1 className="text-center p-5">All For a Great Price</H1>
              </Paragraph>
            </Block>
            <Section>
              <Block flexBasis="50" className="text-center" align="stretch">
                <Paragraph bgColor="light" padding="0rem">
                  <Card imgSrc="https://picsum.photos/600/300?image=0">
                    <Fade>
                      <H3 className="mt-5">Starter</H3>
                      <P>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Placeat distinctio voluptates enim{' '}
                      </P>
                      <H1 className="mb-4 text-danger">$100</H1>

                      <H6>First Feature</H6>
                      <hr />
                      <H6>Second Feature</H6>
                      <hr />
                      <H6>The Third Feature is Cool!</H6>
                      <hr />
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
              <Block flexBasis="50" className="text-center" align="stretch">
                <Paragraph bgColor="light" padding="0rem">
                  <Card imgSrc="https://picsum.photos/600/300?image=9">
                    <Fade>
                      <H3 className="mt-5">Enterprise</H3>
                      <P>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Placeat distinctio voluptates enim{' '}
                      </P>
                      <H1 className="mb-4 text-danger">Contact Us</H1>

                      <H6>First Feature</H6>
                      <hr />
                      <H6>Second Feature</H6>
                      <hr />
                      <H6>The Third Feature is Cool!</H6>
                      <hr />
                      <H6>The Last Feature is to die for</H6>
                      <hr />
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* FORM SECTION */}
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="100">
                <Paragraph className="text-center">
                  <Fade>
                    <H1>Subscribe Now!</H1>
                    <H3>
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

export default Product;
