import React from "react";
import { Row, Col } from "reactstrap"
import Layout from "../components/layout/layout"
import styles from "./security.module.scss"
// import Tarjeta from '../components/elements/card'
import { Link } from "gatsby"
import InputButton from "../components/elements/inputButton"

export default () => (
  <Layout active="Security">
    <section>
      <Row className="p-0 m-0 mt-5 pt-0 w-100">
        <div className="col-6 ">
        <img
          src="/images/stock/confortable.jpg"
          alt="Gif card"
          className={styles.imgSecurity}
        />
        </div>

        <Col
          md="6"
          className="justify-content-center align-items-center h-100 my-auto"
        >
          <div className={styles.homeContainer + " container my-auto pt-5"}>
            <div className={styles.subtittlegreen}>
              <h1
                className={"pb-3 pt-1 text-left mx-auto my-3 mt-5"}
              >
                Security
              </h1>
            </div>
            <div className={styles.backgroundSecurityText}>
                <p
                  className={
                    styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto" 
                  }
                >
                  Electronic Money Institution (EMI) account protection Your funds
                  are deposited in a regulated Electronic Money Institution (EMI),
                  which complies with the required European regulations.
                </p>
                <p
                  className={
                    styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                  }
                >
                  Automated regulatory compliance (KYC and AML) We follow strict
                  global standards with each of our clients on investor profiling
                  (KYC) and money laundering prevention (AML).
                </p>
                <p
                  className={
                    styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                  }
                >
                  Multi-level profile protection In order to access your profile,
                  you will be requested a second factor of authentication.
                </p>
                <p
                  className={
                    styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                  }
                >
                  Notifications Consult your profile to see information on your
                  investments, earnings, or other transactions.
                </p>
            </div>
            <div className={styles.subtittlegreen}>
              <h1
                className={"pb-3 pt-1 text-left mx-auto my-3 mt-5"}
              >
                Tips to promote your security
              </h1>
            </div>
            <div>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                Phishing – be cautious about emails and fake websites Phishing is
                when someone attempts to get your password or login credentials
                through deceptive emails, text messages or fake websites. For
                example, you might receive a link that redirects to a fake
                website, which then asks for sensitive personal information. Be
                careful, since the fake site often looks like a real bank or other
                well-known site.
              </p>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                We recommend that you avoid clicking on links in emails or text
                messages that seem suspicious. Neither Sundaymarketplace nor any
                other reputable entity will ever ask you for your password or bank
                access details, card PIN (personal identification number) by email
                or text message. If you’re ever in doubt, please contact customer
                support before you proceed.
              </p>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                We also recommend that you double check how you’ve typed a web
                address. Criminals often operate websites named for well-known
                sites, but with small typos. The sites often look like the
                originals, and are solely designed to capture your password, PIN,
                or other sensitive information.
              </p>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                It’s also important not to enter personal information on a website
                that starts with a normal . Instead, always look for a secure in
                your browser window. Secure sites also have a small lock symbol
                next to the site name in your browser.
              </p>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                It’s also important not to enter personal information on a website
                that starts with a normal . Instead, always look for a secure in
                your browser window. Secure sites also have a small lock symbol
                next to the site name in your browser.
              </p>
            </div>
            <div className={styles.subtittlegreen}>
              <h1
                className={" pb-3 pt-1 text-left mx-auto my-3 mt-5"}
              >
                Pharming – an extension of Phishing
              </h1>
            </div>
            <div className={styles.backgroundSecurityText}>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                Classic phishing involves having you click on a link. This has
                been further developed into a method called pharming. Malicious
                software can change the settings on a computer in a way that can
                redirect web traffic to a fake site, even when you enter the
                correct website address.
                <br />
                Criminals then collect sensitive information from the fake site.
                Protect your computer, as we’ve recommended, with up-to-date
                anti-virus software and by activating your firewall.
              </p>
            </div>
            <div className={styles.subtittlegreen}>
              <h1
                className={" pb-3 pt-1 text-left mx-auto my-3 mt-5"}
              >
                Avoid computers with public access
              </h1>
            </div>
            <div>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                For security purposes, avoid using “public access” computers (like
                those in internet cafes, hostels or copy shops) to perform secure
                transactions. These computers are particularly susceptible to
                malware.
              </p>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                Be sure that the WiFi you use for any bank connection is secured
                with “WPA 2” security. The former WEP (Wired Equivalent Privacy)
                standard is outdated and is no longer considered secure. Without
                using the newest standard, cyber criminals could intercept your
                internet connection and compromise your personal data. If you use
                public WiFi networks, there’s a higher risk that your online
                banking data could be compromised. Alternatively, you can use
                mobile banking without WiFi using your phone’s cell service.
              </p>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                Regularly check your account’s activity. Respond immediately if
                you notice any unusual account movements. If you still use a
                traditional bank, or outside of business hours, you can call
                customer service to block your account. Note that traditional
                banks often charge a fee to block your account.
              </p>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                Our support team is available to help on any issue you find, and
                we're constantly working to give you more access and control over
                your account while keeping it safe.
              </p>
            </div>
            <div className={styles.subtittlegreen}>
              <h1
                className={" pb-3 pt-1 text-left mx-auto my-3 mt-5"}
              >
                Tips for more secure online investing
              </h1>
            </div>
            <div className={styles.backgroundSecurityText}>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                Mobile investment apps fall into two different categories. The
                first includes mobile apps specific to particular banks, like the
                majority of traditional banks. In most of these, the mobile apps
                provided by the banks are lagging behind users’ expectations.
              </p>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                The second category consists of modern investment apps, which you
                can use to manage your investments in real time. The Iban mobile
                app combines the security of a Sundaymarketplace account with the
                latest technology.
              </p>
            </div>
            <div className={styles.subtittlegreen}>
              <h1
                className={
                  //styles.generalTextTitleDark +
                  " pb-3 pt-1 text-left mx-auto my-3 mt-5"
                }
              >
                Lock your screen
              </h1>
            </div>
            <div>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                We recommend making your smartphone more secure by adding a lock
                code, pattern or biometric verification - like fingerprint or
                facial recognition. This helps make your apps more secure,
                especially if you lose your phone.
              </p>
            </div>
            <div className={styles.subtittlegreen}>
              <h1
                className={" pb-3 pt-1 text-left mx-auto my-3 mt-5"}
              >
                Update your mobile operating system
              </h1>
            </div>
            <div className={styles.backgroundSecurityText}>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                We recommend that you regularly update the operating system of
                your smartphone. Manufacturers frequently issue software updates
                to protect against new safety defects.
              </p>
            </div>
            <div className={styles.subtittlegreen}>
              <h1
                className={" pb-3 pt-1 text-left mx-auto my-3 mt-5"}
              >
                Update your mobile apps
              </h1>
            </div>
            <div>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                Make sure you download banking apps, and any other apps for that
                matter, only from the official manufacturers’ stores (such as the
                App Store or Play Store). Be suspicious of any new unfamiliar
                apps. They can contain malware and facilitate access to sensitive
                details.
              </p>
            </div>
            <div className={styles.subtittlegreen}>
              <h1
                className={" pb-3 pt-1 text-left mx-auto my-3 mt-5"}
              >
                Be careful with WiFi and Bluetooth
              </h1>
            </div>
            <div className={styles.backgroundSecurityText}>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                We recommend that you disable publicly accessible WiFi connections
                and your device’s Bluetooth function before you make a mobile
                connection to your bank. Even if you’re using a private WiFi
                network, you should check that it’s secured by the WPA2 system.
              </p>
            </div>
            <div className={styles.subtittlegreen}>
              <h1
                className={" pb-3 pt-1 text-left mx-auto my-3 mt-5"}
              >
                Protect your passwords and PINs
              </h1>
            </div>
            <div>
              <p
                className={
                  styles.generalTextGrey + " pb-3 pt-1 w-100 text-left mx-auto"
                }
              >
                Never save any passwords, usernames, or PINs on your smartphone.
                If your phone is lost or becomes infected with malware, this will
                increase your risk of falling prey to cyber criminals. We also
                recommend avoiding logging in through the app on someone else’s
                phone, especially if this person is unknown to you.
              </p>
            </div>
          </div>
        </Col>
        <section className={styles.sectiongreen}>
          <Row className="p-0 m-0">
            <Col
              xs="12"
              className="justify-content-center align-items-center my-auto"
            >
              <div className={styles.homeContainer + " container my-auto"}>
                <h2
                  className={styles.subtittlegreen + " pb-3 pt-5 text-center mx-auto my-2 mt-5"}
                >
                  Ready. Set. Go
                </h2>
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
                <small><p>
                  Investing your money puts your capital at risk.
                  <Link to="/risk" className={styles.links + " ml-2"}>
                    Learn more about risks
                  </Link>
                </p></small>
              </div>
            </Col>
          </Row>
        </section>
      </Row>
    </section>
  </Layout>
)
