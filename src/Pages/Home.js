/* eslint-disable */
import React, { useEffect, useState } from "react";
import { listBusinessTypeAPI, listCountryAPI, listStateAPI, listCityAPI, addBrandAPI } from "../ApiIntegration"
// import { useAlert } from "react-alert";

const Home = () => {
  // const alert = useAlert();
  const [business, setBusiness] = useState([])
  const [country, setCountry] = useState([])
  const [states, setStates] = useState([])
  const [city, setCity] = useState([])
  const [data, setData] = useState({
    brand: "",
    businessType: "",
    city: "",
    country: "",
    email: "",
    mobile: "",
    state: "",
    website: "",
  })

  useEffect(() => {
    listBusinessTypeAPI(({ response }) => {
      setBusiness(response.data)

    })
    listCountryAPI(({ response }) => {
      setCountry(response.data)
    })

  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    if ([e.target.name] == "country") {
      listStateAPI(e.target.value, ({ response }) => {
        setStates(response.data.data)
        setCity([])
      })
    }
    if ([e.target.name] == "state") {
      listCityAPI(e.target.value, ({ response }) => {
        setCity(response.data.data)
      })
    }
  }
  const close = () => {
    let element = document.getElementById("ids");
    element.classList.remove("open");
  };

  const save = () => {
    const { brand, businessType, city, country, email, mobile, state, website } = data;
    addBrandAPI(brand, businessType, city, country, email, mobile, state, website, ({ response }) => {
      if (response.data.success == true) {
        console.log("Brand Created Successfully")
        // alert.success("Brand Created Successfully");
        setData({ brand: "", businessType: "", country: "", email: "", mobile: "", state: "", city: "", website: "" })
      }
      else {
        const err = response.data.error;
        Object.keys(err).forEach(v => {
          console.log("vvvvvvvvvvv", err[v])
          // alert.error(err[v]);
        });
      }
    });
  };

  return (
    <div class="core-content core-responsive-slide" id="ids">
      <header class="header js-header-scroll header__sticky">
        <nav class="core-nav">
          <div class="nav-container">
            <div class="nav-header right">
              <a href="#home">
                <img
                  src="./assets/brand/logo.svg"
                  class="logo"
                  alt="AizoTech"
                /> <h1>Test</h1>test
              </a>
              <button class="toggle-bar core-nav-toggle">
                <span class="fa fa-bars"></span>
              </button>
            </div>

            <div class="wrap-core-nav-list right">
              <ul class="menu core-nav-list">
                <button className="pt" onClick={close}>
                  <i className="fa fa-close"></i>
                </button>
                <li class="active">
                  <a href="#home" onClick={close}>
                    Home
                    </a>
                </li>
                <li>
                  <a href="#about" onClick={close}>
                    About
                    </a>
                </li>
                <li>
                  <a href="#services" onClick={close}>
                    Services
                    </a>
                </li>
                <li>
                  <a href="#pricing" onClick={close}>
                    Pricing
                    </a>
                </li>

                <li>
                  <a href="#" onClick={close}>
                    Contact
                    </a>
                </li>
                <li class="header__button">
                  <a
                    href="#register"
                    onClick={close}
                    style={{
                      color: "white",
                      margin: "17px 0",
                      padding: "8px !important",
                      fontSize: "13px",
                    }}
                    class="sub-s btn btn-primary btn-rounded btn-xs btn-header tr"
                  >
                    Subscription
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class=" dropdown-overlay"></div>
      </header>
      <section class="masthead js-masthead-height pb-0" id="#home">
        <div class="masthead__style-overlay"></div>
        <div class="masthead__style-watter">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="masthead__content masthead__content-mtop">
                  <h1 class="masthead__content-title">
                    Start Build Amazing Marketing Product
                    </h1>
                  <p class="masthead__content-subtitle">
                    Build complete awesome marketing website with amazing
                    landingpage template
                    </p>

                  <div class="masthead__content-action">
                    <a
                      href="#register"
                      class="btn btn-orange btn-rounded btn-icon-left btn-lg"
                    >
                      <i class="fa fa-play"></i> Subscription
                      </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 text-center">
                <div class="masthead__style-watter--image">
                  <div class="masthead__style-watter--icon flyIn">
                    <img
                      src="./assets/images/masthead-icon.png"
                      class="img-fluid"
                      alt="Icon"
                    />
                  </div>
                  <img
                    src="./assets/images/businessman-meditating.png"
                    class="img-fluid"
                    alt="Business Man"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section pt-40" id="pricing">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <h2 class="section__heading section__heading-center">
                Choose our package &amp; Acteved to premium
                </h2>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="pricing__grid">
                <div class="pricing__grid-header">
                  <div class="pricing__grid-header--icon">
                    <span class="fa fa-tree"></span>
                  </div>
                  <h2 class="pricing__grid-header-title">Besic</h2>
                  <div class="pricing__grid-price">
                    <p>
                      From
                        <span class="pricing__grid-price--number">
                        <em class="pricing__grid-price--currency">$</em>59
                        </span>
                      <small class="pricing__content-muted">/mo</small>
                    </p>
                  </div>
                </div>
                <div class="pricing__grid-content">
                  <ul>
                    <li class="included">
                      <i class="fa fa-check"></i> 5 HTML Template
                      </li>
                    <li class="included">
                      <i class="fa fa-check"></i> 2 Free Vector
                      </li>
                    <li class="unincluded">
                      <i class="fa fa-times"></i> PSD File
                      </li>
                    <li class="unincluded">
                      <i class="fa fa-times"></i> Support
                      </li>
                    <li class="unincluded">
                      <i class="fa fa-times"></i> Documentation
                      </li>
                  </ul>
                </div>
                <div class="pricing__grid-action">
                  <button
                    type="button"
                    class="btn btn-default btn-rounded btn-icon-right"
                  >
                    Choose Plan <i class="fa fa-long-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="pricing__grid pricing__grid-blue">
                <div class="pricing__grid-header">
                  <div class="pricing__grid-header--icon">
                    <span class="fa fa-shield"></span>
                  </div>
                  <h2 class="pricing__grid-header-title">Premium</h2>
                  <div class="pricing__grid-price">
                    <p>
                      From
                        <span class="pricing__grid-price--number">
                        <em class="pricing__grid-price--currency">$</em>120
                        </span>
                      <small class="pricing__content-muted">/mo</small>
                    </p>
                  </div>
                </div>
                <div class="pricing__grid-content">
                  <ul>
                    <li class="included">
                      <i class="fa fa-check"></i> 5 Free Vector
                      </li>
                    <li class="included">
                      <i class="fa fa-times"></i> PSD File
                      </li>
                    <li class="included">
                      <i class="fa fa-check"></i> 10 Free Vector
                      </li>
                    <li class="unincluded">
                      <i class="fa fa-times"></i> Support
                      </li>
                    <li class="unincluded">
                      <i class="fa fa-times"></i> Documentation
                      </li>
                  </ul>
                </div>
                <div class="pricing__grid-action">
                  <button
                    type="button"
                    class="btn btn-primary btn-rounded btn-icon-right"
                  >
                    Choose Plan <i class="fa fa-long-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="pricing__grid pricing__grid-orange">
                <div class="pricing__grid-header">
                  <div class="pricing__grid-header--icon">
                    <span class="fa fa-rocket"></span>
                  </div>
                  <h2 class="pricing__grid-header-title">Business</h2>
                  <div class="pricing__grid-price">
                    <p>
                      From
                        <span class="pricing__grid-price--number">
                        <em class="pricing__grid-price--currency">$</em>299
                        </span>
                      <small class="pricing__content-muted">/mo</small>
                    </p>
                  </div>
                </div>
                <div class="pricing__grid-content">
                  <ul>
                    <li class="included">
                      <i class="fa fa-check"></i> 20 HTML Template
                      </li>
                    <li class="included">
                      <i class="fa fa-check"></i> 10 Free Vector
                      </li>
                    <li class="included">
                      <i class="fa fa-times"></i> PSD File
                      </li>
                    <li class="included">
                      <i class="fa fa-times"></i> Support
                      </li>
                    <li class="unincluded">
                      <i class="fa fa-times"></i> Documentation
                      </li>
                  </ul>
                </div>
                <div class="pricing__grid-action">
                  <button
                    type="button"
                    class="btn btn-orange btn-rounded btn-icon-right"
                  >
                    Choose Plan <i class="fa fa-long-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section p0" id="register">
        <div class="container">
          <div
            class="section__cta section__cta-column section__cta-offset"
            style={{ marginBottom: "-550px" }}
          >
            <div calss="row">
              <div class="col-md-12">
                <h2>Let's take your business at next level.</h2>
              </div>
            </div>
            <div calss="row">
              <div class="col-md-8 offset-lg-2">
                <fieldset class="section__cta-subscribe">
                  <form name="ctaSubscribe"
                  >
                    <input type="text" class="section__cta-subscribe-input"
                      placeholder="Enter your Brand Name" value={data.brand} name="brand" onChange={(e) => handleChange(e)} />
                    <input type="text" class="section__cta-subscribe-input" value={data.email}
                      placeholder="Enter Company Email Address" name="email" onChange={(e) => handleChange(e)} />
                    <input type="number" class="section__cta-subscribe-input" value={data.mobile}
                      placeholder="Enter your Company Contact Number" name="mobile" onChange={(e) => handleChange(e)} />
                    <input type="text" class="section__cta-subscribe-input" value={data.website}
                      placeholder="Enter your Company Webite" name="website" onChange={(e) => handleChange(e)} />
                    <select class="section__cta-subscribe-input" value={data.businessType} name="businessType" onChange={(e) => handleChange(e)}>
                      <option value="">Select business nature</option>
                      {business && business.map((data, idx) => (
                        <option value={data.id} key={idx}>{data.business_type}</option>
                      ))}

                    </select>

                    <select class="section__cta-subscribe-input" value={data.country} name="country" onChange={(e) => handleChange(e)}>
                      <option value="">Select Your Country</option>
                      {country && country.map((data, idx) => (
                        <option value={data.id} key={idx}>{data.country}</option>
                      ))}

                    </select>
                    <select class="section__cta-subscribe-input" name="state" value={data.state} onChange={(e) => handleChange(e)}>
                      <option value="">Select Your State</option>
                      {states && states.map((data, idx) => (
                        <option value={data.id} key={idx}>{data.state}</option>
                      ))}

                    </select>
                    <select class="section__cta-subscribe-input" name="city" value={data.city} onChange={(e) => handleChange(e)}>
                      <option value="">Select Your City</option>
                      {city && city.map((data, idx) => (
                        <option value={data.id} key={idx}>{data.city}</option>
                      ))}

                    </select>

                    <br />
                    <button type="button" onClick={save} style={{
                      display: "block",
                      position: "inherit",
                      float: "right"
                    }}
                      class="btn btn-rounded btn-white section__cta-subscribe-button btn-icon-right">Subscribe
                                        <i class="fa fa-long-arrow-right"></i></button>

                  </form>

                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="section section__gray-watter--bottom"
      // style={{ padding: "280px 0 380px" }}
      >
        <div class="row">
          <div class="col">
            <div class="divider"></div>
            <div class="owl-active-nav">
              <div class="owl-carousel js-owl-clients owl-loaded owl-drag">
                <div class="owl-nav">
                  <button type="button" role="presentation" class="owl-prev">
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button type="button" role="presentation" class="owl-next">
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div class="owl-dots disabled"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section pb-40" id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <h2 class="section__heading section__heading-center">
                We are build awesome marketing template
                </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center mb-40">
              <p>
                Et odio honestatis ius. Exerci numquam consequuntur no mei. Ut
                sed ornatus tibique, fabellas pertinax est cu. Te odio omittam
                mea, ea tractatos dissentiunt complectitur nec. Liber
                voluptatum ad vis.
                </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="section__column section__column-left">
                <span class="icon icon-gift column-icon"></span>
                <h4>All in one package</h4>
                <p>
                  Unum liber commune in mel, ut pri tritani propriae menandri.
                  Cum et magna porro intellegat.
                  </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="section__column section__column-left">
                <span class="icon icon-paper-plane column-icon"></span>
                <h4>Send Campaign</h4>
                <p>
                  Unum liber commune in mel, ut pri tritani propriae menandri.
                  Cum et magna porro intellegat.
                  </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="section__column section__column-left">
                <span class="icon icon-cogs column-icon"></span>
                <h4>Easy to use</h4>
                <p>
                  Unum liber commune in mel, ut pri tritani propriae menandri.
                  Cum et magna porro intellegat.
                  </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="section__column section__column-left">
                <span class="icon icon-flask column-icon"></span>
                <h4>New Technology</h4>
                <p>
                  Unum liber commune in mel, ut pri tritani propriae menandri.
                  Cum et magna porro intellegat.
                  </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="section__column section__column-left">
                <span class="icon icon-tree column-icon"></span>
                <h4>Branch system</h4>
                <p>
                  Unum liber commune in mel, ut pri tritani propriae menandri.
                  Cum et magna porro intellegat.
                  </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="section__column section__column-left">
                <span class="icon icon-hard-disk column-icon"></span>
                <h4>Large Storage</h4>
                <p>
                  Unum liber commune in mel, ut pri tritani propriae menandri.
                  Cum et magna porro intellegat.
                  </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="section__column section__column-left">
                <span class="icon icon-book column-icon"></span>
                <h4>Manual Guide</h4>
                <p>
                  Unum liber commune in mel, ut pri tritani propriae menandri.
                  Cum et magna porro intellegat.
                  </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="section__column section__column-left">
                <span class="icon icon-chart column-icon"></span>
                <h4>Actual Report</h4>
                <p>
                  Unum liber commune in mel, ut pri tritani propriae menandri.
                  Cum et magna porro intellegat.
                  </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="section__column section__column-left">
                <span class="icon icon-device column-icon"></span>
                <h4>Fully responsive</h4>
                <p>
                  Unum liber commune in mel, ut pri tritani propriae menandri.
                  Cum et magna porro intellegat.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="section__divider section__divider-right d-none d-lg-block"></div>
      <section class="section pt-40 pb-0 sm-clear-pt" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-40">
              <img
                src="./assets/images/using-software.png"
                class="img-fluid"
                alt="Using Software"
              />
            </div>
            <div class="col-lg-4 align-self-center mb-40">
              <h2>About Smoot Template</h2>
              <p>
                Et odio honestatis ius. Exerci numquam consequuntur no mei. Ut
                sed ornatus tibique, fabellas pertinax est cu. Te odio omittam
                mea, ea tractatos dissentiunt complectitur nec.
                </p>
              <a
                href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                class="btn btn-primary btn-rounded"
              >
                Learn more{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="section__divider section__divider-left"></div>
      <section class="section pt-0 pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 order-lg-4 mb-40">
              <img
                src="./assets/images/businessman-with-laptop.png"
                class="img-fluid"
                alt="Business Man with Laptop"
              />
            </div>
            <div class="col-lg-4 align-self-center mb-40">
              <h2>Vision and Mission</h2>
              <p>
                Et odio honestatis ius. Exerci numquam consequuntur no mei. Ut
                sed ornatus tibique, fabellas pertinax est cu. Te odio omittam
                mea, ea tractatos dissentiunt complectitur nec.
                </p>
              <a
                href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                class="btn btn-primary btn-rounded"
              >
                Learn more{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="section__divider section__divider-right"></div>
      <section class="section pt-0 pb-60">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-40">
              <img
                src="./assets/images/lady-with-handphone.png"
                class="img-fluid"
                alt="Lady with handphone"
              />
            </div>
            <div class="col-lg-4 align-self-center mb-40">
              <h2>Other Software Product</h2>
              <p>
                Et odio honestatis ius. Exerci numquam consequuntur no mei. Ut
                sed ornatus tibique, fabellas pertinax est cu. Te odio omittam
                mea, ea tractatos dissentiunt complectitur nec.
                </p>
              <a
                href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                class="btn btn-primary btn-rounded"
              >
                Learn more{" "}
              </a>
            </div>
          </div>
        </div>
      </section>



      <section class="section section__cta pb-80">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-4">
              <div class="column__boxed">
                <span class="icon icon-help column__boxed-icon"></span>
                <h5 class="column__boxed-title">Get Support</h5>
                <p>
                  Homero sapientem per id, id sonet veniam commune vis, ei nam
                  non
                  </p>
                <a
                  href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                  class="btn-link"
                >
                  Go to support
                  </a>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4">
              <div class="column__boxed">
                <span class="icon icon-users column__boxed-icon"></span>
                <h5 class="column__boxed-title">Our comumnity</h5>
                <p>
                  Homero sapientem per id, id sonet veniam commune vis, ei nam
                  non
                  </p>
                <a
                  href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                  class="btn-link"
                >
                  Go to comumnity
                  </a>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4">
              <div class="column__boxed">
                <span class="icon icon-question column__boxed-icon"></span>
                <h5 class="column__boxed-title">F.A.Q</h5>
                <p>
                  Homero sapientem per id, id sonet veniam commune vis, ei nam
                  non
                  </p>
                <a
                  href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                  class="btn-link"
                >
                  Go to FAQ
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="back-to-top js-back-to-top" style={{ display: "block" }}>
        <span class="fa fa-angle-double-up back-to-top__icon"></span>
        <span class="back-to-top__text">TOP</span>
      </div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="footer__widget">
                <img
                  src="./assets/brand/logo.svg"
                  class="footer__widget-logo"
                  alt="Smooth"
                />
                <p>St.Kemacetan timur No.13 Block Q2 Jakarta - Indonesia</p>
                <div class="footer__widget-contact">
                  <i class="fa fa-phone"></i>
                  <p>(021) 111-222-333-44</p>
                </div>
                <div class="footer__widget-contact">
                  <i class="fa fa-envelope"></i>
                  <p>info@yourdomain.com</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-lg-2 col-sm-3">
              <div class="footer__widget">
                <h4 class="footer__widget-title">Product</h4>
                <ul class="footer__widget-linklist">
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      Landing page
                      </a>
                  </li>
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      Email marketing
                      </a>
                  </li>
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      HTML template
                      </a>
                  </li>
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      Angular builder
                      </a>
                  </li>
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      Worpress theme
                      </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-2 col-sm-3">
              <div class="footer__widget">
                <h4 class="footer__widget-title">Company</h4>
                <ul class="footer__widget-linklist">
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      About us
                      </a>
                  </li>
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      Services
                      </a>
                  </li>
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      Career
                      </a>
                  </li>
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      Contact
                      </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-2 col-sm-3">
              <div class="footer__widget">
                <h4 class="footer__widget-title">Resources</h4>
                <ul class="footer__widget-linklist">
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      Blog
                      </a>
                  </li>
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      F.A.Q
                      </a>
                  </li>
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      Testimoni
                      </a>
                  </li>
                  <li>
                    <a
                    // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                    >
                      Site map
                      </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-3 col-sm-3">
              <div class="footer__widget">
                <h4 class="footer__widget-title">Follow us</h4>
                <ul class="footer__widget-network">
                  <li>
                    <a
                      // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                      class="footer__widget-network-link"
                    >
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                      class="footer__widget-network-link"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                      class="footer__widget-network-link"
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="http://99webpage.com/theme-review/landingpage/smooth/home-alt2.html#"
                      class="footer__widget-network-link"
                    >
                      <i class="fa fa-youtube-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

}

export default Home;
