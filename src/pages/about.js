import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import avatarSrc from "../images/avatar.jpg"

const Avatar = styled.img`
  border-radius: 100%;
  height: 200px;
  object-fit: cover;
  width: 200px;
`

export default function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <Avatar src={avatarSrc} />
      <p>A Frontend Engineer who does sports and philosophy</p>
    </Layout>
  )
}
