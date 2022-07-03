import React from "react"
import Layout from "../components/layout/layout"
import styles from "./index.module.scss"
import InputButton from "../components/elements/inputButton"
import { Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Mygraph from "../components/elements/mygraph"

export default () => (
  <Layout active="HOME">
    <section className={styles.sectionwhite}>
      <Row className="p-0 m-0 mt-5 pt-4 w-100">
        <Col
          md="6"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div className={styles.homeContainer + " container my-auto pt-5"}>
            <h1
              className={
                styles.subtittle + " pb-3 pt-1 text-center mx-auto my-3 mt-5"
              }
            >
              Marketplace for investing in loans.
            </h1>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-1 w-75 text-center mx-auto"
              }
            >
              Invest in loans and potentially start earning passive income.{" "}
              <br />
              Connect with opportunities on our marketplace.
            </p>
            <div
              className={
                styles.sendInfo + " d-flex justify-content-center pb-0"
              }
            >
              <InputButton
                svg="/images/icons/arrow-right.svg"
                alt="Arrow Right"
                holder="E-mail"
                type="email"
              />
            </div>
            <div
              className={
                styles.textSmall + " d-flex justify-content-center pb-5 m-3"
              }
            >
              <small>
                <p>
                  Investing your money puts your capital at risk.
                  <Link to="/risk" className={styles.links + " ml-2"}>
                    Learn more about risks
                  </Link>
                </p>
              </small>
            </div>
          </div>
        </Col>
        <Col md="6" className="p-0 m-0">
          <div className={styles.containerGif + " d-none d-lg-block p-0 m-0"}>
            <img
              src="/images/stock/travel.jpg"
              alt="Travel"
              className={styles.travel}
            />
          </div>
        </Col>
      </Row>
    </section>
    <section className={styles.sectiongreen}>
      <Row className="p-0 m-0">
        <Col xs="12">
          <div className={styles.homeContainer + " container my-auto"}>
            <h1 className={styles.subtittle + " pb-0 pt-0 text-center my-3"}>
              Sundaymarketplace
            </h1>
          </div>
        </Col>
        <Col
          lg="4"
          className="justify-content-center justify-content-around align-items-center"
        >
          <div
            className={
              styles.iconcontainer +
              "container my-auto d-flex justify-content-center"
            }
          >
            <img
              src="/images/icons/icono-2.png"
              alt="Card"
              className={styles.icon + " my-0"}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <h4
              className={
                styles.generalTextGrey +
                " pb-4 pt-3 text-center mx-auto text-bold"
              }
            >
              Legally compliant
            </h4>
            <p
              className={
                styles.textgreen + " pb-4 pt-1 w-100 text-center mx-auto"
              }
            >
              We apply the EU standards to each of our Clients in relation to
              their investor profile (KYC) and Anti-Money Laundering prevention
              laws.
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100"
        >
          <div
            className={
              styles.iconcontainer +
              "container my-auto d-flex justify-content-center"
            }
          >
            <img
              src="/images/icons/icono-3.png"
              alt="Card"
              className={styles.icon + " my-0"}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <h4
              className={
                styles.generalTextGrey +
                " pb-4 pt-3 text-center mx-auto text-bold"
              }
            >
              Multi-level profile protection
            </h4>
            <p
              className={
                styles.textgreen + " pb-4 pt-1 w-100 text-center mx-auto"
              }
            >
              In order to access your profile,
              <br></br>
              you will be requested a second factor of authentication.
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100"
        >
          <div
            className={
              styles.iconcontainer +
              "container my-auto d-flex justify-content-center "
            }
          >
            <img
              src="/images/icons/icono-1.png"
              alt="Card"
              className={styles.icon + " my-0"}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <h4
              className={
                styles.generalTextGrey +
                " pb-4 pt-3 text-center mx-auto text-bold"
              }
            >
              Notifications
            </h4>
            <p
              className={
                styles.textgreen + " pb-4 pt-1 w-100 text-center mx-auto"
              }
            >
              Consult your profile to see information on your investments,
              earnings, or other transactions.
            </p>
          </div>
        </Col>
      </Row>
    </section>
    <section className={styles.sectionwhite}>
      <Row className="p-0 m-0">
        <Col xs="12">
          <div className={styles.homeContainer + " container my-auto"}>
            <h1 className={styles.subtittle + " pb-0 pt-0 text-center my-3"}>
              Our Values
            </h1>
          </div>
        </Col>
        <Col
          lg="4"
          className="justify-content-center justify-content-around align-items-center"
        >
          <div
            className={
              styles.iconcontainer +
              "container my-auto d-flex justify-content-center"
            }
          >
            <img
              src="/images/icons/happyClients.png"
              alt="Card"
              className={styles.icon + " my-0"}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <h4
              className={
                styles.generalTextGrey +
                " pb-4 pt-3 text-center mx-auto text-bold"
              }
            >
              Happy clients
            </h4>
            <p
              className={
                styles.textgreen + " pb-4 pt-1 w-100 text-center mx-auto"
              }
            >
              We believe that having happy clients is the foundation to a successful business.
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100"
        >
          <div
            className={
              styles.iconcontainer +
              "container my-auto d-flex justify-content-center"
            }
          >
            <img
              src="/images/icons/trust.png"
              alt="Card"
              className={styles.icon + " my-0"}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <h4
              className={
                styles.generalTextGrey +
                " pb-4 pt-3 text-center mx-auto text-bold"
              }
            >
              Transparency builds trust
            </h4>
            <p
              className={
                styles.textgreen + " pb-4 pt-1 w-100 text-center mx-auto"
              }
            >
              Clients are happier when more transparency is available, since it builds trust!
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100"
        >
          <div
            className={
              styles.iconcontainer +
              "container my-auto d-flex justify-content-center "
            }
          >
            <img
              src="/images/icons/teamdiligent.png"
              alt="Card"
              className={styles.icon + " my-0"}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <h4
              className={
                styles.generalTextGrey +
                " pb-4 pt-3 text-center mx-auto text-bold"
              }
            >
              Diligent teamworkers
            </h4>
            <p
              className={
                styles.textgreen + " pb-4 pt-1 w-100 text-center mx-auto"
              }
            >
              We believe that our values will help us attract the best colleagues, 
              and make our company grow.
            </p>
          </div>
        </Col>
      </Row>
    </section>
    <section className={styles.sectiongreen}>
      <Row className="p-0 m-0 my-5 py-5">
        <Col
          xs="12"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div>
            <h2
              className={
                styles.subtittle + " pb-3 pt-1 text-center mx-auto my-4 mt-5"
              }
            >
              Getting Started
            </h2>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className={
            "justify-content-center justify-content-around align-items-center h-100 my-auto"
          }
        >
          <div className={" container my-auto d-flex justify-content-center"}>
            <img
              src="/images/stock/woman-create-account.jpg"
              alt="Card"
              className={styles.getImg}
            />
          </div>
          <div className={"d-flex justify-content-center flex-column"}>
            <h4
              className={
                styles.generalTextGrey +
                " pb-4 pt-3 w-60 text-center mx-auto text-bold"
              }
            >
              Register
            </h4>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div className={" container my-auto d-flex justify-content-center"}>
            <img
              src="/images/stock/girl-check-phone.jpg"
              alt="Card"
              className={styles.getImg}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <h4
              className={
                styles.generalTextGrey +
                " pb-2 pt-3 w-70 text-center mx-auto text-bold"
              }
            >
              Transfer funds to your investor profile
            </h4>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div className={" container my-auto d-flex justify-content-center"}>
            <img
              src="/images/stock/female-working-on-desktop.jpg"
              alt="Thinking Girl"
              className={styles.getImg}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <h4
              className={
                styles.generalTextGrey +
                " pb-3 pt-4 w-60 text-center mx-auto text-bold"
              }
            >
              Build your investment portfolio*
            </h4>
          </div>
        </Col>
        <Col
          xs="12"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <p
            className={styles.textgreen + " pb-1 pt-4 w-75 text-center mx-auto"}
          >
            *Neither Sundaymarketplace nor the loan originator is responsible for
            a borrower failing to service the loan, including for late payments.
            In the case that a borrower is unable to repay the loan, investors
            may lose some or all of their invested capital.
          </p>
        </Col>
      </Row>
    </section>
    <section className={styles.sectionwhite}>
      <Col
        md="12"
        className={"justify-content-center align-items-center h-100 my-0 py-0"}
      >
        <div>
          <h2 className={styles.subtittle + " pb-3 text-center mx-auto my-0"}>
            Ready. Set. Go
          </h2>
          <p
            className={
              styles.generalTextTitleDark +
              " pb-1 pt-1 w-100 text-center mx-auto"
            }
          >
            Start investing today.
          </p>
          <div
            className={styles.sendInfo + " d-flex justify-content-center pb-1"}
          >
            <InputButton
              svg="/images/icons/arrow-right.svg"
              alt="Arrow Right"
              holder="E-mail"
              type="email"
            />
          </div>
          <div
            className={
              styles.textSmall + " d-flex justify-content-center pb-5 m-3"
            }
          >
            <p>
              Investing your money puts your capital at risk.
              <Link to="/risk" className={styles.links + " ml-2"}>
                Learn more about risks
              </Link>
            </p>
          </div>
        </div>
      </Col>
    </section>
  </Layout>
)
