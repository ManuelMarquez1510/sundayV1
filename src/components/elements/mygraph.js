import React from "react"
import "./mygraph.scss"
import { Row, Col } from "reactstrap"
import { style } from "glamor"

const Mygraph = props => {
  return (
    <section>
      <section class="content" name="status" id="status-3">
        <article>
        <Row>
            <Col xs="4">
              <h6 class="textTitle">2.20%</h6>
            </Col>
            <Col xs="4">
            <h6 class="textTitle">3.50%</h6>
            </Col>
            <Col xs="4">
            <h6  class="textTitle">4.84%</h6>
            </Col>
          </Row>
          <div class="chart small-font-size d-flex justify-content-around">
            <div class="bar bar-4 cyan">
              <div class="face side-0">
                <div class="growing-bar"></div>
              </div>
              <div class="face side-1">
                <div class="growing-bar"></div>
              </div>
              <div class="face top"></div>
              <div class="face floor"></div>
            </div>
            <div class="bar bar-2 yellow">
              <div class="face side-0">
                <div class="growing-bar"></div>
              </div>
              <div class="face side-1">
                <div class="growing-bar"></div>
              </div>
              <div class="face top"></div>
              <div class="face floor"></div>
            </div>
            <div class="bar bar-0 lime">
              <div class="face side-0">
                <div class="growing-bar"></div>
              </div>
              <div class="face side-1">
                <div class="growing-bar"></div>
              </div>
              <div class="face top"></div>
              <div class="face floor"></div>
            </div>
          </div>
          <Row>
            <Col xs="4">
              <h6 class="textNamesGraph">Deposits</h6>
            </Col>
            <Col xs="4">
            <h6 class="textNamesGraph">Sundaymarketplace</h6>
            </Col>
            <Col xs="4">
            <h6 class="textNamesGraph">Stocks</h6>  
            </Col>
          </Row>
        </article>
      </section>
    </section>
  )
}

export default Mygraph
