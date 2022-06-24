import React from 'react'

import './Feature.css'

import source from '../../assets/image1/code.jpg'
import source1 from '../../assets/image1/code1.jpg'
import source2 from '../../assets/image1/code2.jpg'
import source3 from '../../assets/image1/code3.jpeg'
import source4 from '../../assets/image1/code4.jpg'


export default function Feature() {
  return (   <>
    <div id='feature'>
                <div> 
                            <p style={{ color : '', fontSize : '1.5em', fontWeight : 'bold' }} >The future is now and you just need to Realize it. Step into Future Today. & Make it Happen </p>
                            <br/>
                            <p style={{ color : 'red' }}> Request Early Access to Get Started </p>
                </div>

                <div> 
                             <div className='aft_bef' > 
                                    <p color='white'> Improvind end <br/> distrusts instantly </p>
                                    <p style={{ color : '#81AFDD' }} > From the fine john he give of rich. They age and draw mrs like. improving end distruss instantly was household applauded  </p>
                             </div>
                     
                             <div className='aft_bef'> 
                                    <p > Become the tended <br/> active </p>
                                    <p style={{ color : '#81AFDD' }} > Considered sympathize uncommonly occasionnel assistance sufficient not. Letter of on become he tended active enbled to </p>
                             </div>
                
                             <div className='aft_bef'> 
                                    <p  > message or am <br/> nothing </p>
                                    <p style={{ color : '#81AFDD' }} > Led asks possible mistress relation elegance eat likewise debating by message or am nothing among chieffy address </p>
                             </div>
                
                             <div className='aft_bef'> 
                                      <p > Really boy law country </p>
                                      <p style={{ color : '#81AFDD' }} > Really boy county she unable her sister. Feet you of its like like six. Among sex are leave law built now in built table in an rapid blum </p>    
                             </div>
                
                </div>
    </div>

     <div className='bar' >
             <div>
                    <span>Request Early access to Get Started </span> <h3 style={{ color : 'white' }} >Register Today & start exploring the endless possibilities</h3>
             </div>
             <a href="/undeux">Get Started</a>
     </div>     

     <div className="bar1">
                 <h1>A lot is happening, <br/> We are blogging about it.</h1>
                 <div>
                             <div className='utile' > 
                                 <img src={source} alt="" width='95%' height='420px' />
                                 <div>
                                 <span style={{ fontSize : '.8em' }} >Sept 21, 2021</span>
                                 <h2 style={{ marginBottom : '3em' }} >GPT-3 and Open AI is the future. <br/> let us explore how it is </h2>
                                 <span>Read full article</span>
                                 </div>
                             </div>
                             <div className='adroit'>
                                          <div id='special' >
                                                 <img src={source1} alt=""  width='105%' height='150px' />
                                                      <div className='kid' >
                                                      <span>Sept 21, 2021</span>
                                                      <h4>GPT-3 and Open AI is the future. <br/> let us explore how it is </h4>
                                                      <span>Read full article</span>
                                         </div>
                     </div>

                                       <div>
                                                 <img src={source2} alt="" width='100%' height='150px'/>
                                             <div className='kid' >
                                               <span>Sept 21, 2021</span>
                                               <h4>GPT-3 and Open AI is the future. <br/> let us explore how it is </h4>
                                               <span>Read full article</span>
                                             </div>
                                       </div>

                                       <div>
                                                 <img src={source3} alt="" width='100%' height='150px'/>
                                                 <div className='kid' >
                                                              <span>Sept 21, 2021</span>
                                                              <h4>GPT-3 and Open AI is the future. <br/> let us explore how it is </h4>
                                                              <span>Read full article</span>
                                                 </div> <br/><br/>
                                        </div>

                                       <div>
                                                 <img src={source4} alt="" width='100%' height='150px'/>
                                                 <div className='kid' >
                                                               <span>Sept 21, 2021</span>
                                                               <h4>GPT-3 and Open AI is the future. <br/> let us explore how it is </h4>
                                                               <span>Read full article</span>
                                                 </div>
                                       </div>
                             </div>
                 </div>
     </div>

    </>
  )
}
