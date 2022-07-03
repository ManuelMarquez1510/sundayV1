import React from "react";
import { Row, Col } from "reactstrap";
import Layout from "../components/layout/layout";
import styles from "./invest.module.scss";
import { Link } from "gatsby";
import InputButton from "../components/elements/inputButton";

export default () => (
  <Layout active="Invest">
    <section
      className={
        styles.sectionhome + " d-flex justify-content-center align-items-center"
      }
    >
      <Row className="p-0 m-0 mt-5 pt-4 w-100">
        <Col
          md="6"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div className={styles.homeContainer + " container my-auto pt-5"}>
            <h1
              className={styles.subtittle + " pb-3 pt-1 text-center mx-auto my-3 mt-5"}
            >
              Your money deserves more.
            </h1>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-1 w-75 text-center mx-auto"
              }
            >
              Reach your potential with Sundaymarketplace.{" "}
            </p>
            <div
              className={
                styles.sendInfo + " d-flex justify-content-center pb-1"
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
                styles.textSmall + " d-flex justify-content-center pb-5"
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
        <Col md="6" className="p-0 m-10">
          <div
            className={styles.containerGif + " d-none d-lg-block p-0 m-0"}
          >
            <img
              
              src="/images/stock/man-ipad.png"
              alt="Gif card"
              className={styles.gifhome}
            />
          </div>
        </Col>
      </Row>
    </section>

    <section
      className={
        styles.sectiongreen + " d-flex justify-content-center align-items-center"
      }
    >
      <Row className="p-0 m-0">
        <Col
          md="12"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div className={styles.homeContainer + " container my-auto pt-5"}>
            <h1
              className={
                styles.subtittle +
                " pb-0 pt-0 text-center mx-auto my-3 mt-3"
              }
            >
              How loans come to Sundaymarketplace
            </h1>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-1 w-75 text-justify mx-auto"
              }
            >
              Lending companies provide alternative financing to individuals and
              small businesses. We check that the companies we work with have a
              strong track record in loan origination, professional risk
              management, and a solid financial standing.
              To help fund the loans they issue, lending companies make them
              available to investors on Sundaymarketplace.
            </p>
          </div>
        </Col>
      </Row>
    </section>

    <section
      className={
        styles.sectionhome + " d-flex justify-content-center align-items-center"
      }
    >
      <Row className="p-0 m-0 mt-0 pt-0 ">
        <Col
          md="6"
          className="justify-content-center align-items-center h-100 my-auto pt-5"
        >
          <div className={styles.homeContainer + " container my-auto pt-1"}>
            <h1
              className={styles.subtittle + " pb-0 pt-1 text-left mx-auto my-0 mt-0"}
            >
              Invest
            </h1>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-0 w-100 text-left mx-auto"
              }
            >
              Autoinvest will buy small fractions of many different loans issued
              by different lending companies to borrowers around the world.
              <br />
            </p>
            <h1
              
              className={styles.subtittle + " pb-0 pt-0 text-left mx-auto my-0 mt-0"}
            >
              Earn
            </h1>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-0 w-100 text-left mx-auto"
              }
            >
              An easy way to invest. Just set an amount, and that’s it. We’ll do
              the rest.
              <br />
            </p>
            <h1
              
              className={styles.subtittle + " pb-0 pt-0 text-left mx-auto my-0 mt-0"}
            >
              Reinvest
            </h1>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-0 w-100 text-left mx-auto"
              }
            >
              We’ll reinvest your returns so your money can work continuously
              and potentially earn even more interest.
            </p>
          </div>
        </Col>
        <Col md="6" className="p-0 m-0">
          <div className={styles.containerGif + " d-none d-lg-block p-5 m-0"}>
            <img
              src="/images/stock/smile.jpg"
              alt="Gif card"
              className={styles.gifhome1}
            />
          </div>
        </Col>
      </Row>
    </section>

    <section
      className={
        styles.sectiongreen + " d-flex justify-content-center align-items-center"
      }
    >
      <div className={styles.homeContainer + " container my-auto"}>
        <h1
          className={styles.generalTextGreen + " pb-0 pt-0 text-center mx-auto my-5 mt-5"}
        >
          When you need your money
        </h1>
      </div>
    </section>
    <section className={styles.sectiongreen}>
      <Row className="p-0 m-0">
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100 my-3"
        >
          <div
            className={
              styles.iconcontainer +
              " container my-auto d-flex justify-content-center px-3 my-3"
            }
          >
            <img
              src="/images/icons/security.png"
              alt="Card"
              className={styles.icon + " my-0"}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <div>
              <h1
                
                className={styles.subtittlegreen + " pb-0 pt-1 text-center mx-auto my-0 mt-0"}
              >
                Marketplace
              </h1>
            </div>
            <p
              className={
                styles.generalTextGrey + " pb-4 pt-1 w-75 text-center mx-auto"
              }
            >
              If you need your money, you can get your investment back even if
              the loans haven’t reached maturity, provided there is enough
              Marketplace liquidity.
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div
            className={
              styles.iconcontainer +
              " container my-auto d-flex justify-content-center px-3 my-3"
            }
          >
            <img
              src="/images/icons/wallet.png"
              alt="Card"
              className={styles.icon + " my-0 mx-3"}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <div>
              <h1
                className={styles.subtittlegreen + " pb-0 pt-1 text-center mx-auto my-0 mt-0"}
              >
                Cash out
              </h1>
            </div>
            <p
              className={
                styles.generalTextGrey + " pb-5 pt-1 w-75 text-center mx-auto"
              }
            >
              Tell us how much you want to withdraw. We’ll sell loans in your
              portfolio to other investors and credit the money to your account.
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        >
          <div
            className={
              styles.iconcontainer +
              " container my-auto d-flex justify-content-center px-3 my-3"
            }
          >
            <img
              src="/images/icons/money.png"
              alt="Card"
              className={styles.icon + " my-0"}
            />
          </div>
          <div className="d-flex justify-content-center flex-column">
            <div>
              <h1
                className={styles.subtittlegreen + " pb-0 pt-1 text-center mx-auto my-0 mt-0"}
              >
                Manage risk smartly
              </h1>
            </div>
            <p
              className={
                styles.generalTextGrey + " pb-5 pt-1 w-75 text-center mx-auto"
              }
            >
              Spreading investments over many different loans is a tried and
              true way to reduce your risk – and earn more stable returns.{" "}
            </p>
          </div>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="justify-content-center justify-content-around align-items-center h-100 my-auto"
        ></Col>
      </Row>
      <section className={styles.sectionwhite}>
        <Row className="p-0 m-0">
          <Col
            xs="12"
            className="justify-content-center align-items-center h-100 my-auto"
          >
            <div className={styles.homeContainer + " container my-auto"}>
              <h3
                className={styles.subtittle + " pb-3 pt-5 text-center mx-auto my-2 mt-5"}
              >
                Ready. Set. Go
              </h3>
            </div>
            <p
              className={
                styles.generalTextTitleDark +
                " pb-1 pt-1 w-75 text-center mx-auto"
              }
            >
              Start investing today.
            </p>
            <div
              className={
                styles.sendInfo + " d-flex justify-content-center pb-1"
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
                styles.textSmall + " d-flex justify-content-center pb-5"
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
          </Col>
        </Row>
      </section>
    </section>
  </Layout>
)
