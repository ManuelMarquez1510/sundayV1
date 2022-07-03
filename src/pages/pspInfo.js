import React from "react";
import { Row, Col } from 'reactstrap'
import Layout from '../components/layout/layout'
import styles from './pspInfo.module.scss'
export default () => (
        <Layout active="Login">
            <section
    className={
        styles.sectionhome + " d-flex justify-content-center align-items-center"
    }
    >
    <Row className="p-0 m-0 mt-2 pt-4 w-100 ">
        <Col
        md="12"
        className="justify-content-center align-items-center h-100 my-auto"
        >
        <div className={styles.homeContainer + " container my-auto pt-5 "}>
            <h1
            className={styles.subtittlegreen +
                
                " pb-3 pt-1 text-left w-75 mx-auto my-3 mt-5"
            }
            >
            About our service provider
            </h1>
            
            <p
            className={
                styles.subtittlegreen4 + " pb-3 pt-1 w-75 text-left mx-auto"
            }
            >
                PECUNIA CARDS EDE, S.L.U. is an Electronic Money Entity supervised by the Bank of
                <br/>
                Spain and registered with number CSB 6707, whose commercial name is 'PECUNPAY'.
            </p>
            
            <p
            className={
                styles.subtittlegreen4 + " pb-3 pt-1 w-75 text-left mx-auto"
            }
            >
            <span className={styles.subtittlegreen4}>PECUNIA CARDS EDE, S.L.U. is the issuer and manager payment account.</span>
            </p>
        </div>
        </Col>
    </Row>
</section>
        </Layout>
    )