import React from 'react'
import Link from 'gatsby-link'
import {Helmet} from "react-helmet";
// import titileicon from '/Users/linyuanhong/Documents/nanmudesign/src/components/icon/1234.ico'

const Header = ({ siteTitle }) => (

  
  <div
    style={{
      background: 'black',
      marginBottom: '60px',
    }}
  >
       {/* <Helmet>
      <link rel='icon' type="image/png" href='./numlogo2.png' ></link>
    </Helmet> */}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '28px 100px',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>

)

export default Header
