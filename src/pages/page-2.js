import React from 'react'
import Link from 'gatsby-link'
import {Helmet} from "react-helmet";
import Application from '/Users/linyuanhong/Documents/nanmudesign/src/components/Application.js'

const SecondPage = () => (
  
  <div>
    <Helmet>
    <title>My Title3333</title>
    <link rel='icon' type='image/png' sizes='16x16' href='src/pages/icon/numlogo2.png'></link>
    </Helmet>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
