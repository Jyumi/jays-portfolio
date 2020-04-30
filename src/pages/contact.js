import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "../components/header"
import Footer from "../components/footer"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      email: file(relativePath: { eq: "email.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

  return (
    <>
      <Header></Header>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div href="mailto:jeonghun.j.im@gmail.com" className="icon"><Img fluid={data.email.childImageSharp.fluid} /></div>
            <div className="contact-text">- jeonghun.j.im@gmail.com</div>
          </div>

          <div className="row">
          <div href="https://www.linkedin.com/in/jay-im-b26819165/" className="icon"><Img fluid={data.linkedin.childImageSharp.fluid} /></div>
          <div className="contact-text">- https://www.linkedin.com/in/jay-im-b26819165/</div>
          </div>

          <div className="row">
          <div href="https://www.facebook.com/im.jeonghun.1" className="icon"><Img fluid={data.facebook.childImageSharp.fluid} /></div>
          <div className="contact-text">- https://www.facebook.com/im.jeonghun.1</div>
          </div>

          <div className="row">
          <div href="https://www.instagram.com/j.im_9/?hl=en" className="icon"><Img fluid={data.instagram.childImageSharp.fluid} /></div>
          <div className="contact-text">- https://www.instagram.com/j.im_9/?hl=en</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact