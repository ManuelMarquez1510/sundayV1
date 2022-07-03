import React from "react"
import { Row, Col } from "reactstrap"
import {Link} from "gatsby"
import Layout from "../components/layout/layout"
import styles from "./howItWorks.module.scss"
import InputButton from "../components/elements/inputButton"


export default () => (
  <Layout active="How it Works?">
    <section>
      <Row className="p-0 m-0 mt-5 pt-4 w-100">
        <Col
          md="6"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div
            className={styles.homeContainer + " container my-auto pt-0 pt-lg-5"}
          >
            <h1
              className={
                styles.tittle + " pb-3 pt-1 text-center mx-auto my-3 mt-5"
              }
            >
              How it works
            </h1>
          </div>
        </Col>
        <Col md="6" className="p-0 m-0">
          <div
            className={
              styles.containerGif +
              " d-none d-lg-flex justify-content-center align-items-center p-0 m-0"
            }
          >
            <img
              src="/images/stock/girl-cat.jpg"
              alt="Gif card"
              className={styles.inicialImg}
            />
          </div>
        </Col>
      </Row>
    </section>
    <section className={styles.sectiongreen + " d-none d-lg-block"}>
      <Row className="p-0 m-0 pt-4">
        <Col
          xs="12"
          lg="3"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div
            className={
              " container my-auto d-flex justify-content-center my-0 my-lg-4"
            }
          >
            <img
              src="/images/stock/thinking.png"
              alt="Card"
              className={styles.howImg}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <p className={styles.textdark + " pb-6 pt-1 w-75  mx-auto"}>
            Sundaymarketplace is special in the way that we do not issue loans – 
            they are brought to the platform by our partner lending companies from around the world.
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="3"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div className="d-flex justify-content-center flex-column pb-3">
            <p className={styles.textdark + " pb-6 pt-1 w-75  mx-auto"}>
            It’s really easy to create a diversified portfolio to protect 
            your investment and earn more stable returns.

            </p>
          </div>
          <div className={" container my-auto d-flex justify-content-center"}>
            <img
              src="/images/stock/vertical-confortable.png"
              alt="Card"
              className={styles.howImg}
            />
          </div>
        </Col>
        <Col
          xs="12"
          lg="3"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div
            className={" container my-auto d-flex justify-content-center pb-4"}
          >
            <img
              src="/images/stock/hand-phone.png"
              alt="Card"
              className={styles.howImg}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <p className={styles.textdark + " pb-6 pt-1 w-75  mx-auto"}>
            Get steady returns - borrowers pay back loans 
            in regular installments plus interest.
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="3"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div className="d-flex justify-content-center flex-column">
            <p className={styles.textdark + " pb-5 pt-1 w-75  mx-auto"}>
            Many investors choose to reinvest their returns so their money can keep working. 
            Given enough time, earnings can grow exponentially thanks to the power of compound interest.
            <span className={styles.textRisk }>*See risk in footer.</span>
            </p>
            
          </div>
          <div className={" container my-auto d-flex justify-content-center"}>
            <img
              src="/images/stock/girl-whithphone-logo.png"
              alt="Card"
              className={styles.howImg}
            />
          </div>
        </Col>
      </Row>
    </section>
    <section className={styles.sectiongreen + " d-lg-none d-block"}>
      <Row className="p-0 m-0 pt-4">
        <Col
          xs="12"
          lg="3"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div
            className={
              " container my-auto d-flex justify-content-center my-0 my-lg-4"
            }
          >
            <img
              src="/images/stock/thinking.png"
              alt="Card"
              className={styles.howImg}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <p className={styles.textdark + " pb-6 pt-1 w-75  mx-auto"}>
            Sundaymarketplace is special in the way that we do not issue loans – 
            they are brought to the platform by our partner lending companies from around the world.
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="3"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div className={" container my-auto d-flex justify-content-center"}>
            <img
              src="/images/stock/vertical-confortable.png"
              alt="Card"
              className={styles.howImg}
            />
          </div>
          <div className="d-flex justify-content-center flex-column pb-3">
            <p className={styles.textdark + " pb-6 pt-1 w-75  mx-auto"}>
              Start investing, request to withdraw at any time directly to your
              bank accounts. Projected interest paid daily on all accounts
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="3"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div
            className={" container my-auto d-flex justify-content-center pb-4"}
          >
            <img
              src="/images/stock/hand-phone.png"
              alt="Card"
              className={styles.howImg}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <p className={styles.textdark + " pb-6 pt-1 w-75  mx-auto"}>
              Sundaymarketplace supervises and manages your investments:
              selecting the rigth type of loan and borrower profile.
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="3"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div className={" container my-auto d-flex justify-content-center"}>
            <img
              src="/images/stock/girl-whithphone-logo.png"
              alt="Card"
              className={styles.howImg}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <p className={styles.textdark + " pb-5 pt-1 w-75  mx-auto"}>
              Create your account, add funds invest in the desired product(s)
              and star reaching our financial goals.
            </p>
          </div>
        </Col>
      </Row>
    </section>
    <section className={" d-none d-lg-block"}>
      <Row className="container my-4 mt-5 mx-auto">
        <Col xs="12"
            className="d-flex justify-content-center align-items-center my-auto">
      <img src="/images/diagrama/diagramatexto.png" alt="Diagrama" className={styles.diagrama}/>
      </Col>
      </Row>
      
    </section>
    <section id="contacto" className="px-4 px-lg-0">
      <div>
        <Row className="p-0 m-0">
          <Col
            xs="12"
            className="justify-content-center align-items-center h-100 my-auto"
          >
            <div className={styles.homeContainer + " container my-auto"}>
              <h2
                className={
                  styles.subtittle + " pb-3 pt-1 text-center mx-auto my-5 mt-5"
                }
              >
                How we are protecting your money
              </h2>
            </div>
          </Col>

          <Col
            xs="12"
            lg="4"
            className="justify-content-center justify-content-around align-items-center h-100 my-auto"
          >
            <div className={" container my-auto d-flex justify-content-center"}>
              <img
                src="/images/stock/mom-child.png"
                alt="Card"
                className={styles.getImg}
              />
            </div>
            <div className="d-flex justify-content-center flex-column">
              <p
                className={styles.textdark + " py-4 px-2 text-justify mx-auto"}
              >
                Your funds are deposited in an Electronic Money Institution
                (EMI) regulated by the European Central Bank.
              </p>
            </div>
          </Col>
          <Col
            xs="12"
            lg="4"
            className="justify-content-center justify-content-around align-items-center h-100 my-auto"
          >
            <div className={" container my-auto d-flex justify-content-center"}>
              <img
                src="/images/stock/man-ipad.png"
                alt="Card"
                className={styles.getImg}
              />
            </div>
            <div className="d-flex justify-content-center flex-column">
              <p
                className={styles.textdark + " py-4 px-2 text-justify mx-auto"}
              >
                All investments are backed by collateral (asset/property)
              </p>
            </div>
          </Col>
          <Col
            xs="12"
            lg="4"
            className="justify-content-center justify-content-around align-items-center h-100 my-auto"
          >
            <div className={" container my-auto d-flex justify-content-center"}>
              <img
                src="/images/stock/hand-phone.png"
                alt="Card"
                className={styles.getImg}
              />
            </div>
            <div className="d-flex justify-content-center flex-column">
              <p
                className={styles.textdark + " py-4 px-2 text-justify mx-auto"}
              >
                Your capital is at risk and is not protected by any financial
                services compensation scheme.{" "}
              </p>
            </div>
          </Col>
          <Col
            xs="12"
            lg="4"
            className="justify-content-center justify-content-around align-items-center h-100 my-auto"
          ></Col>
        </Row>
      </div>
    </section>
    <section className={styles.sectiongreen}>
      <Row className="p-0 m-0">
        <Col
          xs="12"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div className={styles.homeContainer + " container my-auto"}>
            <h3
              className={
                styles.subtittle + " pb-3 pt-5 text-center mx-auto my-0 mt-50"
              }
            >
              Ready to open a profile?
            </h3>
          </div>
        </Col>
        <Col>
          <div
            className={styles.homeContainer + " container my-auto pt-1 pb-3"}
          >
            <div
              className={
                styles.sendInfo +
                " d-flex justify-content-center px-4 px-lg-0 py-4 "
              }
            >
              <InputButton
                svg="/images/icons/arrow-right.svg"
                alt="Arrow Right"
                holder="E-mail"
                type="email"
              />
            </div>
          </div>
        </Col>
      </Row>
    </section>
    <section className={styles.sectionhome}>
      <Row className={"p-0 m-0"}>
        <h1
          className={styles.subtittle + " pb-3 pt-4 w-100 text-center mx-auto "}
        >
          Trust and Transparency
        </h1>
        <p
          className={
            styles.generalTextGrey + " pb-3 pt-1 w-100 text-center mx-auto"
          }
        >
          At Sundaymarketplace, we take investor protection very seriously,our
          risk mitigation policy includes several security layers to help
          protect investors.
          <br />
          Let's take a look at each of these!
        </p>
        <Col sm="12" md="3" className="p-0 m-0">
          <div
            className={"container my-auto d-flex justify-content-center my-2"}
          >
            <img
              src="/images/stock/girl-phone-smile.jpg"
              alt="Card"
              className={styles.trustImg}
            />
          </div>
          <div className={"mx-1 text-center "}>
            <h3 className={styles.subtittlegreen + " my-3 px-3"}>
              Electronic Money Institution (EMI) account protection
            </h3>
            <p
              className={
                styles.generalTextGrey + " py-2 pb-4 px-3 text-justify mx-auto"
              }
            >
              Your funds are deposited in a regulated Electronic Money
              Institution (EMI),which complies with the required European
              regulations.
            </p>
          </div>
        </Col>
        <Col sm="12" md="3" className="p-0 px0">
          <div>
            <div className={" container my-auto d-flex justify-content-center"}>
              <img
                src="/images/stock/girl-plant.jpg"
                alt="Card"
                className={styles.trustImg}
              />
            </div>
            <div className={"mx-1 text-center"}>
              <h3 className={styles.subtittlegreen + " my-3 px-3"}>
                Automated regulatory compliance (KYC and AML)
              </h3>
              <p
                className={
                  styles.generalTextGrey +
                  " py-2 pb-4 px-3 text-justify mx-auto"
                }
              >
                We follow strict global standards with each of our clients on
                investor profiling (KYC) and money laundering prevention (AML).
              </p>
            </div>
          </div>
        </Col>
        <Col sm="12" md="3" className="p-0 px0">
          <div>
            <div className={"container my-auto d-flex justify-content-center"}>
              <img
                src="/images/stock/smile.jpg"
                alt="Card"
                className={styles.trustImg}
              />
            </div>
            <div className={"m-1 text-center"}>
              <h3 className={styles.subtittlegreen + " my-3 px-3"}>
                Multi-level profile protection
              </h3>

              <p
                className={
                  styles.generalTextGrey + " py-4 px-3 text-justify mx-auto"
                }
              >
                In order to access your profile
                <br />
                you will be requested a second factor of authentication.
              </p>
            </div>
          </div>
        </Col>
        <Col sm="12" md="3" className="p-0 px0">
          <div>
            <div className={" container my-auto d-flex justify-content-center"}>
              <img
                src="/images/stock/girl-rest.jpg"
                alt="Card"
                className={styles.trustImg}
              />
            </div>
            <div className={"m1 text-center"}>
              <h3 className={styles.subtittlegreen + " my-3"}>Notifications</h3>
              <p
                className={
                  styles.generalTextGrey + " py-4 px-3 text-justify mx-auto"
                }
              >
                Consult your profile to see information on your investments,
                earnings, or other transactions.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
    <section className={styles.sectiongreen}>
      <Row className="p-0 m-0 mt-5 pt-4 ">
        <Col
          md="6"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div className={styles.homeContainer + " container my-auto pt-5"}>
            <h1
              className={
                styles.subtittlegreen1 + " pb-3 pt-0 text-center mx-auto"
              }
            >
              Broad diversification
            </h1>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-0 text-justify mx-auto"
              }
            >
              Have you ever heard of the classic risk management expression
              "don't put all your eggs into one basket"? Diversification is an
              important component of reaching long-term financial goals while
              minimizing risk. At Sundaymarketplace, we offer higher levels of
              diversification since we divide investments between different loan
              originators. Our products offer different rates of return and
              deposit terms. And the best of all? It happens automatically!
            </p>
          </div>
        </Col>
        <Col md="6" className="p-0 m-0">
          <div
            className={
              " d-none d-lg-flex justify-content-center align-items-center px-4 m-0 "
            }
          >
            <img
              src="/images/stock/Deal.jpg"
              alt="Gif card"
              className={styles.getImgBroad}
            />
          </div>
        </Col>
      </Row>
    </section>
    <section className={styles.sectionhome}>
      <Row className="p-0 m-0 mt-lg-5 pt-4 w-100">
        <Col md="6" className="p-0 m-0">
          <div
            className={
              " d-none d-lg-flex justify-content-center align-items-center px-4 m-0"
            }
          >
            <img
              src="/images/stock/team-working.jpg"
              alt="Gif card"
              className={styles.getImg1}
            />
          </div>
        </Col>

        <Col
          md="6"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div className={styles.homeContainer + " container my-auto pt-lg-5"}>
            <h1
              className={
                styles.subtittlegreen1 +
                " pb-3 pt-0 text-center mx-auto my-3 mt-5"
              }
            >
              Extensive due diligence
            </h1>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-0 text-justify mx-auto"
              }
            >
              There are typically several loans associated to your investments.
              Before accepting the loans from an originator, we execute in-depth
              due diligence procedure on each prospective Loan Originator. We
              perform thorough analysis of financial statements, management
              quality, underwriting policy, credit scoring, investment portfolio
              performance, and data accuracy to ensure that the Loan Originator
              follows the strict risk standards we have set. After the launch of
              the partnership, we continue monitoring the investment for risks
              on an ongoing basis.
            </p>
          </div>
        </Col>
      </Row>
    </section>
    <section className={styles.sectiongreen}>
      <Row className={"p-0 m-0"}>
        <Col
          xs="12"
          md="12"
          className="justify-content-center align-items-center h-100"
        ></Col>
      </Row>
    </section>
  </Layout>
)
