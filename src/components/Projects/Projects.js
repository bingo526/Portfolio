import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bondly from "../../Assets/Projects/bondly.png";
import dondi from "../../Assets/Projects/dondi.png";
import gamerone from "../../Assets/Projects/gamerone.png";
import paraSwap from "../../Assets/Projects/paraSwap.png";
import rentberry from "../../Assets/Projects/rentberry.png";
import security from "../../Assets/Projects/security.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bondly}
              isBlog={false}
              title="Bondly"
              description="Empowering dApps and traders with high liquidity and instant transactions"
              link="https://www.bondly.finance/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dondi}
              isBlog={false}
              title="Node Dondi"
              description="Decentralized networking platform based on smart contracts that connects people from all over the world and opens up the limitless possibilities of the new economic financial system"
              link="https://node.dondi.io/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamerone}
              isBlog={false}
              title="GamerOne"
              description="Gamer One is a fast growing eSports startup that builds a social community for worldwide gamers."
              link="https://gamerone.gg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paraSwap}
              isBlog={false}
              title="ParaSwap"
              description="Empowering dApps and traders with high liquidity and instant transactions"
              link="https://paraswap.io/#/?network=polygon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rentberry}
              isBlog={false}
              title="RentBerry"
              description="Rentberry is the first real estate platform that offers a fully digital rental journey."
              link="https://rentberry.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={security}
              isBlog={false}
              title="24-7security"
              description="24/7 Security Services provides integrated security solutions by combining manpower with the latest security technology. Guarding, Armed Reaction and Technology are strategically deployed to ensure the safety of our clients and the communities we serve."
              link="https://24-7security.co.za/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
