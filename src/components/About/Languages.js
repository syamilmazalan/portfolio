import React from "react"
import styled from "styled-components"
import { lighten } from "polished"
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap"
import { FaJsSquare, FaPhp, FaDatabase } from "react-icons/fa"

import { H3 } from "../Typography"
import { primary_color, elevation, secondary_color } from "../../styles"

let LanguagesSlider = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
      <Row xs="1" s="2" md="3">
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <FaJsSquare />
                <H3>JavaScript</H3>
              </CardTitle>
              <ListGroup>
                <ListGroupItem>React</ListGroupItem>
                <ListGroupItem>Redux</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <FaPhp />
                <H3>PHP</H3>
              </CardTitle>
              <ListGroup>
                <ListGroupItem>Laravel</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <FaDatabase />
                <H3>Other</H3>
              </CardTitle>
              <ListGroup>
                <ListGroupItem>MySQL</ListGroupItem>
                <ListGroupItem>GraphQL</ListGroupItem>
                <ListGroupItem>Nginx</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export const LanguagesSection = styled(LanguagesSlider)`
  margin-top: 7rem;

  .row {
    margin-top: 2rem;
  }

  .card {
    background-color: ${primary_color};
    ${elevation[0]};
    margin-bottom: 1rem;
  }

  .card-body {
    padding: 2rem;

    h3 {
      display: inline-block;
      margin-left: 1.5rem;
    }

    .list-group-item {
      background: ${lighten(0.1, primary_color)};
    }
  }

  svg {
    width: 3rem;
    height: 3rem;
    color: ${secondary_color};
    margin-bottom: 1rem;
  }
`
