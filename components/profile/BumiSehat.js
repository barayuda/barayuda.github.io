import React, { Fragment } from "react";

import SectionTitle from "./SectionTitle";

import Safe from "react-safe";

const BumiSehat = () => (
  <section>
    <SectionTitle>Donate</SectionTitle>

    <Fragment>
      <Safe.script type="text/javascript" src="https://www.globalgiving.org/javascript/widget/widget.js">{`{'projectids': '49963'}`}</Safe.script>
    </Fragment>
  </section>
);

export default BumiSehat;
