import React from 'react'

import './Navbar.css';
import {FaDropbox} from 'react-icons/fa'
import {FaShopify} from 'react-icons/fa'
import {DiAtlassian} from 'react-icons/di'
import {IoLogoSlack} from 'react-icons/io' //IoLogoSlack

import ia from '../../assets/image1/code5.jpg'

export default function Navbar() {
  return (  <>
    <div id='nav'>
                <ul>
                     <li><h2> GPT-3 </h2></li>
                     <li> <a href="/"> Home </a> </li>
                     <li> <a href="/about"> What is GPT? </a> </li>
                     <li> <a href="/open_api"> Open AI </a> </li>
                     <li> <a href="/usecase"> Case Studies </a> </li>
                     <li> <a href="/library"> Library </a> </li>
                </ul>
                <div>
                       <span style={{ color : 'white' }} > Sign In </span>
                       <a> Sign Up </a>
                </div>
    </div>
    <div id='header'>
            <div id='left'>
                          <div className='sansimage' >
                                        <div>
                                                <h1>Let's Build Something amazing with GPT-3 OpenAI </h1>
                                                <p style={{ color : '#81AFDD' }} > yet bed open for travelling assistance indulgence unpleasing.  Not thoughts all exercise blesssing. Indulgence way everything joy alteration boisterous to 
                                                      the attachement. Party we years to order allow asked of </p> <br/>
                                                <input type="email" placeholder='Your Email Address' name='addresse'/> <a>Get Started</a> 
                                        </div>
                          </div>
                          <img src={ia} alt="" />
            </div> <br/>
            <ul>
                        <li> Google </li>
                        <li> <a href=""> <FaDropbox /> Dropbox </a> </li>
                        <li> <a href=""> <FaShopify /> Shopify </a> </li>
                        <li> <a href=""> <IoLogoSlack /> Slack </a> </li>
                        <li> <a href=""> <DiAtlassian /> Atlassian </a> </li>
            </ul> 
    </div>
    </>
  )
}
