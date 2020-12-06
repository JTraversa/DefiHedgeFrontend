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
import TraversaCard from "images/Traversa.svg"
import multicoin from "images/multicoin.png"


const HeadingContainer = tw.div`-mb-12`
const Heading = tw(SectionHeading)`text-primary-700`
const Heading2 = tw(SectionHeading2)`m-2 align-middle hocus:text-primary-600`
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Subheading2 = tw(SubheadingBase)`mt-8 text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`
const Description2 = tw(SectionDescription)`text-sm mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
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
    ${tw`mr-8 last:mr-0 text-gray-600 hocus:text-primary-600 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Our Team:",
  subheading = "Introducing the talent",
  description = "",
  cards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1602720412890-7a856a113b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      position: "Founder/CEO",
      name: "Julian Traversa",
	  meta: "Julian Traversa",
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
      position: "Co-Founder",
      name: "William Hsieh",
	  meta: "William Hsieh",
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
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} meta={card.meta}/>
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
		  <Card>
		  <Subheading2>Were Hiring!
		  </Subheading2>
		  <Heading2> <a href="https://angel.co/company/defihedge/jobs/1022041-full-stack-software-engineer" target="_blank">Full-Stack Developer </a></Heading2>
		  <Heading2> <a href="https://angel.co/company/defihedge/jobs/1023593-solidity-protocol-developer" target="_blank">Solidity/Protocol Developer </a></Heading2>
		  <Heading2> <a href="https://angel.co/company/defihedge/jobs/1023574-front-end-software-engineer" target="_blank">Front-end Developer </a></Heading2>
		  <Description2>
		  If you are interested  in a role but don't quite fit these specific positions, feel free to reach out!
		  </Description2>
		  </Card>
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
