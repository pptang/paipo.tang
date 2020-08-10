import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

import creativemashimashiSrc from "../images/my-works/creativemashimashi.png"
import palooza from "../images/my-works/palooza.png"
import japanInsider from "../images/my-works/japan-insider.png"
import skijo from "../images/my-works/skijo.png"
import worklifeinjapan from "../images/my-works/worklifeinjapan.png"
const myFeaturedWorks = [
  {
    title: "Creative Mashi Mashi",
    screenshotSrc: creativemashimashiSrc,
    link: "http://www.creativemashimashi.com/",
    description: "",
    techStacks: ["PWA"],
  },
  {
    title: "Palooza",
    screenshotSrc: palooza,
    link: "https://palooza.com.tw/",
    description: "",
    techStacks: ["GraphQL", "TypeScript", "Gitlab CI"],
  },
  {
    title: "Japan Insider",
    screenshotSrc: japanInsider,
    link: "https://www.japaninsider.co/",
    description: "",
    techStacks: ["Elm", "headless wordpress"],
  },
  {
    title: "Skijo",
    screenshotSrc: skijo,
    link: "https://skijo.net/",
    description: "",
    techStacks: ["Hasura", "GraphQL"],
  },
  {
    title: "Work Life in Japan",
    screenshotSrc: worklifeinjapan,
    link: "https://www.worklifeinjapan.net/",
    description: "",
    techStacks: ["Wordpress"],
  },
]

const H1 = styled.h1`
  font-size: 36px;
  font-weight: bold;
`

const Section = styled.section`
  max-width: 960px;
`

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
`

const Description = styled.p``

const Content = styled.p(props => ({
  display: "flex",
  flexDirection: props.isEven ? "row" : "row-reverse",
  justifyContent: "center",
}))

const Screenshot = styled.img`
  border-radius: 4px;
  height: 500px;
  object-fit: contain;
  width: 500px;
`

const TechStacks = styled.ul``
const Tech = styled.li``

const MyWork = ({
  index,
  title,
  screenshotSrc,
  link,
  description,
  techStacks,
}) => (
  <Section>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Content isEven={index % 2 === 0}>
      <Screenshot src={screenshotSrc} />
      <TechStacks>
        {techStacks.map(techTitle => (
          <Tech>{techTitle}</Tech>
        ))}
      </TechStacks>
    </Content>
  </Section>
)

export default function Home() {
  return (
    <Layout>
      <H1>Featured Works of Paipo Tang</H1>

      {myFeaturedWorks.map((props, index) => (
        <MyWork {...props} index={index} />
      ))}
    </Layout>
  )
}
