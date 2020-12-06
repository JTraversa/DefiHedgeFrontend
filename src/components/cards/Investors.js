import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, SectionHeading2, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import Multicoin1 from "images/multicoin.png"
import Electric from "images/electric_logo.png"
import Divergence from "images/divergence-logo.svg"
import Defiance from "images/defiance_logo.png"
import CMS from "images/cms_logo.png"

const HeadingContainer = tw.div`-mb-32`
const Heading = tw(SectionHeading)``
const Heading2 = tw(SectionHeading2)`align-middle`
const Heading3 = tw(SectionHeading2)`mt-8 align-middle hocus:text-green-500`
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Subheading2 = tw(SubheadingBase)` text-center mb-3`
const Subheading3 = tw(SubheadingBase)`text-center text-green-600 mb-3 text-4xl`
const Description = tw(SectionDescription)`mx-auto text-center`
const Description2 = tw(SectionDescription)`text-sm mx-auto text-center`

const Cards = tw.div`mt-0 flex flex-wrap flex-row justify-center `
const Cards2 = tw.div`mt-24 flex flex-wrap flex-row justify-center `
const Card = tw.div`mx-0 mt-24 p-4 flex flex-col items-center `
const angelHeading = tw.div`mt-24 mx-0 p-4 flex flex-col items-center`
const Card2 = tw.div`-mt-16 mx-8 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const Card3 = tw.div`w-full w-1/5 flex flex-col items-center`
const Card4 = tw.div`mt-24 p-16 max-w-5xl w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const Card5 = tw.div`-mt-10 mx-8 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const Card6 = tw.div`w-full mx-12 mt-12 w-1/3 flex flex-col items-center`

const ImageContainer = tw.div``;
const Image = tw.img`mt-8 max-w-full hocus:shadow-inner`;

const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Our Investors:",
  subheading = "Backed By Industry Pioneering Thought Leaders",
  description = "",
  cards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1602720412890-7a856a113b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      position: "Founder/CEO",
      name: "Julian Traversa",
      links: [
        {
          url: "https://twitter.com/TraversaJulian",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/juliant94/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/JTraversa",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.imgur.com/OoZzb1J.jpg",
      position: "Contributor",
      name: "William Hsieh",
      links: [
        {
          url: "https://twitter.com/willchsieh",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/wchsieh2/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/whsieh2",
          icon: GithubIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <span tw="text-green-600"><Heading>{heading}</Heading></span> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
		  <Card>
			  <a href="https://multicoin.capital" target="_blank">
			  <Image src={Multicoin1} width="390px" />
			  </a>
		  </Card>
		  <Card>
			  <a href="http://cmsholdings.io/" target="_blank">
			  <Image src={CMS} width="350px"/>
			  </a>
		  </Card>
		  <Card>
			  <a href="https://electriccapital.com" target="_blank">
			  <Image src={Electric} width="440px"/>
			  </a>
		  </Card>
		  <Card2>
			  <a href="https://www.defiance.capital/" target="_blank">
			  <Image src={Defiance} width="350px"/>
			  </a>
		  </Card2>
		  <Card5>
			  <a href="https://div.vc" target="_blank">
			  <Image src={Divergence} width="350px"/>
			  </a>
		  </Card5>
        </Cards>
		<Cards2>
		<angelHeading> 
		  <Subheading3>
		  Our Angels:
		  </Subheading3>
		 </angelHeading>
		</Cards2>
		<Cards>
		  <Card3>
		  <Heading3>
			<a href="https://twitter.com/alpackap?lang=en" target="_blank">
			  Alex Pack
			</a>
		  </Heading3>
		  </Card3>
		  <Card3>
		  <Heading3>
			<a href="https://twitter.com/lmrankhan" target="_blank">
			  Imran Khan
			</a>
		  </Heading3>
		  </Card3>
		  <Card3>
		  <Heading3>
			<a href="https://twitter.com/QWQiao" target="_blank">
			  Qiao Wang
			</a>
		  </Heading3>
		  </Card3>
		  <Card3>
		  <Heading3>
			<a href="https://www.ashegan.com/" target="_blank">
			  Ash Egan
			</a>
		  </Heading3>
		  </Card3>
		</Cards>
		<Cards>
		  <Card6>
		  <Heading3>
			<a href="https://twitter.com/StaniKulechov" target="_blank">
			  Stani Kulechov
			</a>
		  </Heading3>
		  </Card6>
		  <Card6>
		  <Heading3>
			<a href="https://twitter.com/tklocanas?lang=en" target="_blank">
			  Thomas Klocanas
			</a>
		  </Heading3>
		  </Card6>
		</Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
