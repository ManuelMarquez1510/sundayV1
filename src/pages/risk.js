import React from "react";
import { Row, Col } from 'reactstrap'
import Layout from '../components/layout/layout'
import styles from './risk.module.scss'
export default () => (
        <Layout active="Login">
            <section
      className={
        styles.sectionhome + " d-flex justify-content-center align-items-center"
      }
    >
      <Row className="p-0 m-0 mt-5 pt-4 w-100">
        <Col
          md="12"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div className={styles.homeContainer + " container my-auto pt-5"}>
            <h1
              className={styles.subtittlegreen +
                
                " pb-3 pt-1 text-center mx-auto my-3 mt-5"
              }
            >
              What risks are associated with investing through Sundaymarketplace?
            </h1>
            
            <h1 
              className={styles.subtittlegreen1 +
                " pb-3 pt-1 text-center mx-auto my-3 mt-5"
              }
            >
              1. Credit risk/Default risk.
            </h1>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-1 w-100 text-center mx-auto"
              }
            >
              There is a possibility that the borrower will not make future scheduled payments; 
              as a result, the investor may lose part or all of the investment made. 
              The amount of possible loss, if any, would depend on the type of loan. 
              For example, in the case of default on a secured loan, such as a mortgage or car loan, 
              the repayment of the loan would be made by first realizing the collateral, 
              and second by trying to recover outstanding amount from the borrower; 
              this should result in a lower loss of funds, if any.

            </p>
            
            <h1 
              className={ styles.subtittlegreen1 +
                
                " pb-3 pt-1 text-center mx-auto my-3 mt-5"
              }
            >
            2. Cash flow timing risk.
            </h1>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-1 w-100 text-center mx-auto"
              }
            >
              All payments from an investment in a loan are directly linked to the actual payments done by the borrower. 
              There may be situations in which the borrower makes a payment after the scheduled payment date; 
              as a result, the investor may receive cash flows later than expected.
              </p>
            <h1
              className={ styles.subtittlegreen1 +
                
                " pb-3 pt-1 text-center mx-auto my-3 mt-5"
              }
            >
              3. Prepayment risk
            </h1>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-1 w-100 text-center mx-auto"
              }
            >
              The borrower usually has an option to repay the loan early, which is usually done by repaying the principal
              and accrued interest up to the date of early repayment. 
              In the event the investor had made the investment at a premium, 
              the unamortized part of the premium would be lost.
            </p>
            <p
              className={
                styles.generalTextGrey + " pb-3 pt-1 w-100 text-center mx-auto"
              }
            >
              In order to minimize any of the above-mentioned risks, 
              investors can diversify their investments across different borrowers, 
              loan products, loan originators, and geographies.
            </p>
          </div>
        </Col>
      </Row>
</section>
        </Layout>
    )