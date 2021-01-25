import React, { Fragment } from "react";
import SectionTitle from "../profile/SectionTitle";
import Link from "next/link"; 

const BumiSehat = () => (
  <section>
    <SectionTitle>Donate</SectionTitle>
    <div className="bumisehat__wrapper">
      <div className="bumisehat__title">
        <p>Deliver Pandemic Maternal Health Care in Bali</p>
      </div>
      <div className="bumisehat__image">
        <img src="/bumisehat.jpg" alt="Yayasan Bumi Sehat" />
      </div>
      <Link href="https://www.globalgiving.org/projects/deliver-pandemic-maternal-health-care-in-bali/?rf=ggWidget" passHref={true}>
        <a className="bumisehat__donate">Donate Now</a>
      </Link>
      <div className="bumisehat__image">
        <img src="/powered_by_globalgiving.png" alt="GlobalGiving.org" />
      </div>
    </div>
  </section>
);

export default BumiSehat;
