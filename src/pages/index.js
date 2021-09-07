import * as React from "react";
import Helmet from "react-helmet";
import mike from "../images/mike.png";
import favicon from "../images/icon.png";

// styles
const divStyle = {
  display: "flex",
  justifyContent: "center",
}

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: "600",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 500,
}

const paragraphStyles = {
  marginBottom: 48,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const daytoday = [
  "Python",
  "Golang",
  "MongoDB",
  "RabbitMQ",
  "Docker",
  "React.js or Vue.js"
];

const A = ({href, children}) => {
  return (
    <a style={docLinkStyle} target="_blank" rel="noopener noreferrer" href={href}>{children}</a>
  )
};

// markup
const IndexPage = () => {
  return (
    <div style={divStyle}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <main style={pageStyles}>
        <title>Home Page</title>
        <h1 style={headingStyles}>
          <img src={ mike } style={{paddingRight: "10px", height: "200px", width: "200px"}} />
          Hi, I'm Mike! <span role="img" aria-label="Party popper emojis">👋</span>
        </h1>
        <section>
          <p style={paragraphStyles}>
            I'm a software engineer at <A href="http://www.spectric.com/">Spectric Labs, Inc.</A>
            where I'm building scalable solutions for the US government. My day-to-day technology stack looks like
          </p>
          <ul>
            {daytoday.map((item, i) => <li key={i} style={listItemStyles}>{item}</li>)}
          </ul>
          <p style={paragraphStyles}>
            In the past, I've led the rearchitectures of legacy monolithic digital signals processing systems to
            service-oriented architectures, achieving a massive increase in throughput, scalability, and reliability.
            All of these systems are still running in operational environments serving customers worldwide. Furthermore, I've developed
            deep learning models and ETL systems to help triage and prioritize data for analysts.
          </p>
        </section>
        <section>
          <p style={paragraphStyles}>
            I graduated from the <A href="https://www.virginia.edu">University of Virginia</A> in 2014
            with a Bachelor of Science in <A href="http://www.ece.virginia.edu">Electrical Engineering</A> 
            and a second major in <A href="https://www.cs.virginia.edu">Computer Science</A>
            and in 2016 with a Master of Engineering in <A href="https://www.ece.virginia.edu">Electrical Engineering</A> 
            on the topic of approximating noise waves in microwave and millimeter devices. I had the pleasure of conducting research under
            <A href="https://www.ece.virginia.edu/faculty/weikle.html">Bobby Weikle</A>.
            In addition, I researched incorporating <A href="https://dijkstra.cs.virginia.edu/genprog/">genetic algorithms</A>
            into the multi-objective optimization problem of visual fidelity vs runtime in path tracers with
            <A href="https://eecs.engin.umich.edu/people/weimer-westley/">Wes Weimer</A>.
          </p>
          <p style={paragraphStyles}>
            On the side, I enjoy taking photos, trying new restaurants and cocktail bars, and traveling.
            I have the privilege of being married to my best friend <A href="https://erin.recachinas.dev">Erin</A>,
            father to our wonderful baby girl, and doggo-dad to my girl <A href="https://instagram.com/jalapenopoppy">Poppy</A>.
          </p>
        </section>
      </main>
    </div>
  )
}

export default IndexPage
