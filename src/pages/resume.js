import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "../components/header"
import Footer from "../components/footer"

const Resume = () => {
    const data = useStaticQuery(graphql`
        query {
            resume: file(relativePath: { eq: "310resume.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            business: file(relativePath: { eq: "business.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }

            tableau: file(relativePath: { eq: "tableau.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }

            python: file(relativePath: { eq: "python.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }

            powerBI: file(relativePath: { eq: "powerBI.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }

        }
  `)

    return (
        <>
            <Header></Header>

            <div className="resume">
                <div className="container">
                    <div className="row">
                        <div className="resume-image"><Img fluid={data.resume.childImageSharp.fluid} /></div>
                    </div>


                    <div className="row">
                        {/* business */}
                        <div className="certificate-txt">Business Analysis Foundations</div>
                        <div className="certificate-img">
                            <Img fluid={data.business.childImageSharp.fluid} />
                        </div>



                        {/* tableau */}
                        <div className="certificate-txt">Tableau Essential Training</div>
                        <div className="certificate-img">
                            <Img fluid={data.tableau.childImageSharp.fluid} />
                        </div>
                    </div>

                    <div className="row">
                        {/* python */}
                        <div className="certificate-txt">Learning Python</div>
                        <div className="certificate-img">
                            <Img fluid={data.python.childImageSharp.fluid} />
                        </div>

                        {/* powerBI */}
                        <div className="certificate-txt">Power BI Essential Training</div>
                        <div className="certificate-img">
                            <Img fluid={data.powerBI.childImageSharp.fluid} />
                        </div>
                    </div>

                    <div className="row">
                        {/* href="https://www.linkedin.com/in/jay-im-b26819165/" */}
                        <div className="certificate-txt"> Certifications:</div>
                        <div className="certificate-txt">UGA Arch Ready</div>
                        <div className="certificate-txt">Introduction to Computing using Python</div>
                        <div className="certificate-txt">Lean Six Sigma Yellow Belt</div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    )
}

export default Resume