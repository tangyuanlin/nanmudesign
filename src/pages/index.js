import React from 'react'
import {Helmet} from "react-helmet";

// import './src/'
// import Link from 'gatsby-link'


const IndexPage = () => (
  
  <div>
        <Helmet>
    <title>NUM Design</title>
    {/* <link rel='icon' type='image/png' sizes='16x16' href='src/pages/icon/numlogo2.png'></link>
    <link rel='shortcut icon' type='image/x-icon' sizes='16x16' href='src/pages/icon/numlogo3.ico'></link> */}
    </Helmet>
    <div className='bgc'></div>
    <h1 fontsize='1333px'>Welcome to NUM Design</h1>
    <p>Welcome to a new design team</p>
    {/* <p>Now go see something great.</p> */}
 
    {/* <Link className="lk" to="/page-2/">Go to page 2</Link> */}

  </div>
)

export default IndexPage
