import React from "react"

import frigidaire from "../../images/brands/frigidaire.svg"
import generalElectric from "../../images/brands/general-electric.svg"
import lg from "../../images/brands/lg.svg"
import maytag from "../../images/brands/maytag.svg"
import whirlpool from "../../images/brands/whirlpool.svg"
import samsung from "../../images/brands/samsung.svg"

import "./sponsors.css"

class Sponsors extends React.Component {
  render() {
    return (
      <div className="sponsors">
        <p className="titre">Trusted By</p>
        <div className="logos">
          <img alt="frigidaire" src={frigidaire} />
          <img alt="general electric" src={generalElectric} />
          <img alt="LG" src={lg} />
          <img alt="maytag" src={maytag} />
          <img alt="whirlpool" src={whirlpool} />
          <img alt="samsung" src={samsung} />
        </div>
      </div>
    )
  }
}

export default Sponsors
