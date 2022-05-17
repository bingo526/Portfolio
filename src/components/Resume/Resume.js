import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/forrest-li.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const spojRank = 458;
  const hackerrank = 874;

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        // upadteSpojRank(res.data.message[0].spojRank);
        // upadteHackerank(res.data.message[1].hackerrank);
        // upadteCgpa(res.data.message[2].cgpa);
        // upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Front-End & Web3 Developer"
              date="2019-2022"
              content={[
                "Built Whole UI / UX on frontend side and implemented Web trading chart feature using web3.js and React modern javascript technology",
                "Built real-time data updates structure using Apollo client subscription technology",
                "Integrated smart contract and MetaMask using the Web3, React, and TypeScript",
              ]}
            />
            <Resumecontent
              title="Solidity Developer"
              date="2017-2019"
              content={[
                "Implement a simple Automated Market Maker (x * y = k formula) exploring liquidity pool implementations (finally using Uniswap V2 TWAPs).",
                "Working with design patterns like factories, proxies, withdrawal, and others.",
                "Working with Chainlink oracles to intercommunicate chains through external API calls (LinkPool node integration for an IDO).",
              ]}
            />
            <Resumecontent
              title="Full Stack Developer"
              date="2016-2017"
              content={[
                "Non-Fungible Tokens (NFTs) on EOS and WAX blockchain using Atomic Assets and Simple Assets",
                "Built the bridging EVM compatible blockchain to transfer ERC20 and ERC1155 token from one blockchain to another.",
                "Built the Card Game components and integrate the third-party APIs and Restful APIs using the React, Redux, Axios and TypeScript.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Fudan University"
              date="2011 - 2015"
              content={[`Bachelor of Engineering`]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
