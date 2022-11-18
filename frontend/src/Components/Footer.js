import React from 'react';
import FF from '../images/formfunction.png';
import TT from '../images/twitter.png';
import EA from '../images/exchangeart.png'

function Footer() {
  return (
    <div className="footer-all d-flex justify-content-between">
      <div className="d-flex p-2">
        <a href="https://formfunction.xyz/@tevo" target="_blank" rel="noreferrer">
          <img src={ FF } className="img-logo" alt="FormFuncion" width="50px"/>
        </a>
      
        <a href="https://twitter.com/tevoeatacid" target="_blank" rel="noreferrer">
          <img src={ TT } alt="Twitter" className="img-logo" width="48px" />
        </a>
        <a href="https://exchange.art/tevo/nfts" target="_blank" rel="noreferrer">
          <img src={ EA } alt="Exchange Art" className="img-logo" width="54px" />
        </a>   
      </div>

      <p>Feito e atualizado por Nick Mendes</p>
    </div>
  )
}

export default Footer;