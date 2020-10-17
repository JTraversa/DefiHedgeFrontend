import React, { useState, useEffect } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";


import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase,
  PrimaryLink2 as PrimaryLinkBase2,
} from "components/headers/light.js";

import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding, ContentWithVerticalPadding2 } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as HandleIcon } from "images/handle-icon.svg";
import { ReactComponent as ArrowRightIcon} from "images/arrow-right-3-icon.svg";
import WhitepaperPDF from "pdf/DefiHedge-Whitepaper-v0.2.0.pdf"

import exchange from "images/demo/exchange.png";
import logo from "images/logo.svg";
import useInView from "use-in-view";
import FAQ from "components/faqs/SingleCol.js";
import HowItWorks from "components/features/TwoColWithSteps.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import Team from "components/cards/ProfileThreeColGrid.js";
import About from "components/testimonials/TwoColumnWithImage.js";

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col sm:flex-row items-center justify-between`;
const DownloadLink = tw.a`mt-8 sm:mt-0 transition duration-300 font-medium pb-1 border-b-2 text-primary-500 border-purple-300 hocus:border-primary-500`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center py-20 lg:py-24 max-w-screen-2xl mx-auto`;

const Column = tw.div``;
const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;
const SecondaryButton = tw(
  ActionButton
)`h-12 py-3 mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded shadow-2xl`;

const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionContainer2 = tw(ContentWithVerticalPadding2)``;
const SectionHeading = tw(HeadingBase)`text-primary-900`;
const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;

const PreviewCards = tw.div`flex flex-wrap -mr-12`;
const PreviewCardContainer = tw.div`mt-24 mx-auto md:mx-0 max-w-lg w-full md:w-1/2 lg:w-1/3 pr-12`;
const PreviewCard = tw(motion.a)`block rounded-lg shadow-raised`;
const PreviewCardImageContainer = tw.div`rounded-t-lg border-0 border-b-0`;
const PreviewCardImage = styled(motion.div)`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-128 md:h-144 bg-cover bg-left-top`}
`;
const PreviewButton = tw(PrimaryButtonBase)`w-full rounded-b-lg rounded-t-none py-5 font-semibold`;

const ComponentsContainer = tw.div`mt-24`;
const ComponentsType = tw.h3`text-4xl font-black text-primary-500 border-b-4 border-primary-500 inline-block`;
const Components = tw.div``;
const Component = tw.div`mt-12 border rounded-lg bg-white`;
const ComponentHeading = tw.div`px-8 py-5 border-b flex flex-col sm:flex-row justify-between items-center`
const ComponentName = tw.h6`text-lg`;
const ComponentPreviewLink = tw.a`mt-4 sm:mt-0 text-primary-500 hocus:text-primary-900 transition duration-300 font-semibold flex items-center`
const ComponentContent = tw.div`flex justify-between overflow-hidden rounded-b-lg bg-gray-600 relative`;
const ResizableBox = styled(Rnd)`
  ${tw`relative! bg-white pr-4`}
  .resizeHandleWrapper > div {
    ${tw`w-4! right-0!`}
  }
`;

const ResizeHandleButton = tw.button`cursor-col-resize focus:outline-none w-4 border-l bg-gray-100 absolute right-0 inset-y-0`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(NavLinkBase)`lg:text-green-900 lg:hocus:text-green-300 lg:hocus:border-green-100`;
const NavLink2 = tw(NavLinkBase)`mr-12 lg:text-green-900 lg:hocus:text-green-300 lg:hocus:border-green-100`;
const LogoLink = tw(LogoLinkBase)`text-green-100 hocus:text-green-300`;
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;
const PrimaryLink2 = tw(PrimaryLinkBase2)`h-12 m-6 text-center shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;
const SecondaryLink = tw(PrimaryLinkBase2)`h-12 text-center bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;

export default ({
  features = null,
  primaryButtonUrl = "#faqSection",
  primaryButtonText = "View Whitepaper",
  secondaryButtonUrl = "https://defi-hedge-protocol.vercel.app/",
  secondaryButtonText = "Try Ropsten PoC",
  buttonRoundedCss = "",
  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks
}) => {
  const previewImageAnimationVariants = {
    rest: {
      backgroundPositionY: "0%"
    },
    hover: {
      backgroundPositionY: "100%",
      transition: { type: "tween", ease: "linear", duration: 5 }
    }
  };
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;
const logoLink = (
    <LogoLink href="/">
      <img src={logo} alt="Logo" />
    </LogoLink>
  );
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#HowItWorksSection">How It Works</NavLink>
      <NavLink href="#TeamSection">Team</NavLink>
	  <NavLink2 href="https://angel.co/company/defihedge/jobs" target="_blank">Jobs</NavLink2>
      <PrimaryLink href={WhitepaperPDF} target="_blank" >Whitepaper</PrimaryLink>
    </NavLinks>
  ];
  const noOfLandingPages = Object.keys(landingPages).length;
  const noOfInnerPages = Object.keys(innerPages).length;
  const noOfComponentBlocks = Object.values(blocks).reduce((acc, block) => acc + Object.keys(block.elements).length, 0);

  features = features || [
    `${0} Counterparty Risk`,
    `${0} Transaction Overhead`,
    "Unparallelled Leverage",
    "Secure & Minimalistic Design",
  ];

  return (
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
		<AnimationRevealPage>
          <Header logoLink={logoLink} links={navLinks} />
          <HeroRow>
            <TextColumn>
              <Heading>The Protocol For Interest-Rate Derivatives </Heading>
              <Description>
                As the first and most efficient protocol for trustless interest-rate swaps, DefiHedge provides lenders the ability to lend at fixed-rates or maximize yields with leveraged lending positions.
              </Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
              <Actions>
                <PrimaryLink2 href={WhitepaperPDF} target="_blank">
                  {primaryButtonText}
                </PrimaryLink2>
                <SecondaryLink href={secondaryButtonUrl} target="_blank">
                  {secondaryButtonText}
                </SecondaryLink>
              </Actions>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={exchange} imageBorder={true} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
		  <SectionContainer2 id="HowItWorksSection">
		  <HowItWorks>
		  </HowItWorks>
		  </SectionContainer2>
		  <SectionContainer2 id="faqSection">
			<FAQ
			subheading={<Subheading>FAQS</Subheading>}
			heading={
			  <>
				You have <HighlightedText>Questions ?</HighlightedText>
			  </>
			}
			faqs={[
			  {
				question: "What is an interest-rate derivative?",
				answer:
				  "An interest rate derivative is an instrument with a value that is dependent on the movements of an interest rate or rates. Interest rate derivatives are often used as hedges by institutional investors, banks, companies, and individuals to protect themselves against changes in market interest rates, but they can also be used to increase or refine the holder's risk profile or to speculate on rate moves."
			  },
			  {
				question: "What is a fixed-for-floating swap?",
				answer:
				  "A fixed-for-floating swap is a contractual arrangement between two parties in which one party swaps the interest cash flows of fixed-rate loan(s) with those of floating-rate loan(s) held by another party."
			  },
			  {
				question: "How are rates determined?",
				answer:
				  "The current fixed-rate is set by a marketplace of opposing lenders on taking fixed and floating positions. The fixed-side wants the highest rate possible, similar to a traditional asset seller, while the floating-side wants to give the lowest rate possible similar to a buyer."
			  },
			  {
				question: "How do you provide 0 counterparty risk?",
				answer:
				  "Each lending agreement is immediately covered using like-kind collateral. This ensures that every fixed-rate is backed from agreement origination without risking the absconsion or liquidation of funds."
			  },
			  {
				question: "How much interest-rate leverage do you offer?",
				answer:
				  "Our design offers variable leverage dependent on an agreement's fixed-rate. For example, Bob offers a 1% fixed-rate for 1 yr, Bob is backing $1 for every $100 in exposure, therefore 100x leverage. Alternatively should Bob offer 5% he would need to back $5 per $100, receiving 20x."
			  },
			  {
				question: "What are the contract risks?",
				answer:
				  "Given our design utilizes lending protocols such as Aave or Compound, the risk profile of our product is dependent upon the mechanism risk within these protocols. DefiHedge's trading infrastructure itself bears little added risk."
			  }
			]}
			/>
		  </SectionContainer2>
		  <SectionContainer2 id="TeamSection">
		  <Team>
		  </Team>
		  </SectionContainer2>
		  <Footer />
		  </AnimationRevealPage>
        </Content2Xl>
      </Container>
  );
};

const BlocksRenderer = ({blocks}) => {
  const [lastVisibleBlockIndex, setLastVisibleBlockIndex] = useState(0)

  const updateLastVisibleBlockIndex = (index) => {
    console.log("LAST WAS ", lastVisibleBlockIndex)
    if(index > lastVisibleBlockIndex)
      setLastVisibleBlockIndex(index)
  }

  return (
    <ComponentsContainer>
      {blocks.map((block, index) => ((lastVisibleBlockIndex+1) >= index) && <Block key={index} components={block} notifyIsVisible={() => updateLastVisibleBlockIndex(index)} />)}
    </ComponentsContainer>
  )
}

const Block = ({notifyIsVisible, components}) => {
  const offset = 30;
  const [ref, inView] = useInView(offset);

  useEffect(() => {
    if(inView)
      notifyIsVisible()
  }, [inView, notifyIsVisible])

  const ResizeHandle = (
    <ResizeHandleButton>
      <HandleIcon tw="w-4 h-4 text-gray-600" />
    </ResizeHandleButton>
  );

  const componentBlockRefs = {};

  const updateComponentBlockIframeHeight = iframe => {
    iframe.style.height = "auto";
    iframe.style.height = (iframe.contentWindow.document.body.scrollHeight) + "px";
  };

  return (
    <div ref={ref} tw="mt-32">
      <ComponentsType>{components.type}</ComponentsType>
      <Components>
        {Object.values(components.elements).map((component, componentIndex) => (
          <Component key={componentIndex}>
            <ComponentHeading>
              <ComponentName>{component.name}</ComponentName>
              <ComponentPreviewLink className="group" href={component.url} target="_blank">View Live Demo <ArrowRightIcon tw="transition duration-300 transform group-hover:translate-x-px ml-2 w-4 h-4" /></ComponentPreviewLink>
            </ComponentHeading>
            <ComponentContent>
              <ResizableBox
                minWidth={420}
                default={{
                  width: "100%",
                  height: "100%"
                }}
                bounds="parent"
                disableDragging={true}
                enableResizing={{ right: true }}
                resizeHandleComponent={{ right: ResizeHandle }}
                resizeHandleWrapperClass={`resizeHandleWrapper`}
                onResize={() => updateComponentBlockIframeHeight(componentBlockRefs[component.url])}
              >
                <iframe
                  src={component.url}
                  title="Hero"
                  width="100%"
                  ref={ref => (componentBlockRefs[component.url] = ref)}
                  onLoad={e => updateComponentBlockIframeHeight(e.target)}
                />
              </ResizableBox>
            </ComponentContent>
          </Component>
        ))}
      </Components>
    </div>
  )
}
