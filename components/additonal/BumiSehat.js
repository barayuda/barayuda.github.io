import Link from "next/link";
import React from "react";

import SectionTitle from "../profile/SectionTitle";

const BumiSehat = () => (
  <section>
    <SectionTitle>Donate to Yayasan Bumi Sehat</SectionTitle>
    <div className="bumisehat__wrapper">
      <div className="bumisehat__title">
        <p>Deliver Pandemic Maternal Health Care in Bali</p>
      </div>
      <div className="bumisehat__image">
        <img src="/bumisehat.jpg" alt="Yayasan Bumi Sehat" />
      </div>
      <Link
        href="https://www.globalgiving.org/projects/deliver-pandemic-maternal-health-care-in-bali/?rf=ggWidget"
        passHref={true}
      >
        <a className="bumisehat__donate">Donate Now</a>
      </Link>
      <div className="bumisehat__image">
        <img src="/powered_by_globalgiving.png" alt="Bumi Sehat - GlobalGiving.org" />
      </div>
    </div>
  </section>
);

export default BumiSehat;
