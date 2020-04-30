import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "../components/header"
import Footer from "../components/footer"

const About = () => {
    const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "CDHS-109.jpg" }) {
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
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="headshot">
                            <Img fluid={data.headshot.childImageSharp.fluid} />
                        </div>

                        <div className="column">
                            <p>I am an undergraduate student and majoring in Management Information Systems at the University of Georgia. I excel in analyzing and interpreting information through multiple programs and systems. I also have a passion for learning and acquiring new skills that I hope to re-discover when I have an opportunity to work at various organizations and companies.</p>
                            <p>Skills: MySQL, Java, HTML, CSS, JavaScript, C++, .NET, Tableau, Power BI, Python, Google Data Studio</p>
                            <p>Interests: Technology, Software, Sports, Workout, Computers, Games, Music, Food, Travel</p>

                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default About