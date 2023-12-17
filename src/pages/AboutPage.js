import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
   <>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            We are a company specialized in the global furniture industry. Our
            designs are of the highest quality, cheapest prices and latest
            designs
          </p>
          <br />
          <div className="title">
            <h2>our Contact</h2>
            <div className="underline"></div>
          </div>
          <p>You can contact us via the following E-mail: <b>furniture@gmail.com</b><br />

And inquire about any product through the following number: <br />
<b>(+20) (01012345678)</b></p>
        </article>
      </Wrapper>
      </>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
