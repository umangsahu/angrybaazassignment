import React from 'react'
import "./stylesheet/first.css"

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";


const data = [
  {
    imglink: "./media/vector.png",
    heading: "Application Stacks",
    color: "#ED4B9E",
    desc: "We develop android &iOS apps which can increase customer engagement and generate ROI with maximum ROI with maximum lead conversion"
  },
  {
    imglink: "./media/Group.png",
    heading: "Website Stacks",
    color: " #4B4DED",
    desc: "Get extensively researched website and web app development services using the latest technologies like MEAN, MERN, Laravel, BootStrap, and much more."
  },
  {
    imglink: "./media/vector(1).png",
    heading: "Database Stacks",
    color: "#31D0AA",
    desc: "We have a set of technologies and services that organizations use to store, manage, and access data."
  },
  {
    imglink: "./media/AI.png",
    heading: "AI/ML Stacks",
    color: "#F4C751",
    desc: "We provide features to larger organizations which have already started maturing their processes to create standardized ML pipelines that are optimized for scale, efficiency, and control."
  },
  {
    imglink: "./media/blockchain.png",
    heading: "Blockchain",
    color: "#FF3131",
    desc: "We use Blockstack, a project that utilizes blockchain technology to expand the functionalities of bitcoin by serving as a second layer protocol."
  },
  {
    imglink: "./media/blank.png",
    heading: "Gaming Stacks",
    color: " #F4C751",
    desc: "Gaming services serve customers in gambling establishments, such as casinos or racetracks. Some workers tend slot machines or deal cards."
  },



]
const Heading = (props) => {
  return (
    <div className="au683a">
      {props.first} <br />{props.last}
      {/* See popular tags <br /> and browse different topics */}
    </div>
  )
}

const First = () => {
  return (
    <>
      <div className="mainContainer">

        <img src="./media/Rectangle.svg" alt="" />

        <img id="au68a" src="./media/Group 42(1).png" alt="" />


        <div className="i6835">
          <img id="i6835a" src="./media/arrow.png" alt="" />
          <img id="i6835b" src="./media/chatboat.gif" alt="" />
        </div>
        <div className="contentContainer">
          <div className="conleft">
            <span className='au68b'>welcome to infenito</span>
            <span className="au68c">We power brands to build big!</span>
          </div>
          <div className="conRight">
            <img src="./media/amaze.png" alt="" />
          </div>
        </div>


      </div>

      {/* next section */}
      <section className="au683">
        <Heading first={"See popular tags "} last={"and browse different topics"} />

        <div className="au683b">
          <div className="au683bleft">
            <div className="box">Diffrent topics</div>
            <div className="img">
              <img src="./media/line hr.png" alt="" />
            </div>


            <ul>
              <li className='au683bll'>AI/ML</li>
              <li className='au683blr'> Node</li>
              <li className='au683bll'>Database</li>
              <li className='au683blr'>My SQL</li>
              <li className='au683bll'>React</li>
            </ul>
          </div>
          <div className="au683bright">
            <div className="rightbox">

              {
                data.map((curr) => {
                  return (
                    <div className="au683ba">

                      <img src={curr.imglink} alt="" />
                      <h1>{curr.heading}</h1>
                      <span style={{ background: curr.color }} className="colorline"></span>
                      {curr.desc}
                    </div>
                  )

                })
              }

            </div>


          </div>
        </div>
      </section>





      <section className="se674" >
        <Heading first={"Services we provide"} />
        <span className='subtext'>We serve the users in different categories with latest tools</span>

<div className="finalimg">
  <img src="./media/g1.png" alt="" />
</div>
      </section>



      <section className='fo765'>
        <Heading first={"Let’s See"} last={"how it works"} />

        <div className="fo765a">

          <img src="./media/first.png" alt="" />
          <img src="./media/second.png" alt="" />
          <img src="./media/third.png" alt="" />
          <img src="./media/fourth.png" alt="" />

        </div>
      </section>
      <section className="fi375">

        <div className="fi375a">
          <span className="fi375aa">
            What you get besides<br />
            the above things
          </span>
          <span className="fi375ab">
            <img src="./media/Group(1).png" alt="" />
            24/7 Support
          </span>
          <span className="fi375ac">
            <img src="./media/supp.gif" alt="" />
          </span>


        </div>
        <div className="fi375b">

          <div className="fi375bg"></div>




          <Heading first={"Still have a doubt ?"} />


          <span className="subtext2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <div className="slide">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}

              className="mySwiper"
            >
              <SwiperSlide><img src="./media/1.png" alt="" />

                <span className="text" data-length="60px">
                  About Infenito,<br />
                  insights about us
                </span>
              </SwiperSlide>
              <SwiperSlide><img src="./media/4.png" alt="" />


                <span className="text" data-length="60px">
                  See our latest blogs<br />
                  about stacks
                </span>

              </SwiperSlide>
              <SwiperSlide><img src="./media/3.png" alt="" />

                <span className="text" data-length="60px">
                  Unlock new metaverse<br />
                  in the design system
                </span>

              </SwiperSlide>
              <SwiperSlide><img src="./media/2.png" alt="" />

                <span className="text" data-length="60px">
                  Unlock new metaverse<br />
                  in the design system
                </span>
              </SwiperSlide>
              <SwiperSlide><img src="./media/5.png" alt="" />
                <span className="text" data-length="60px">
                  Get insights of some<br />
                  websites
                </span>

              </SwiperSlide>

            </Swiper>

          </div>
        </div>

        <div className="fi375c">
          <div className="fi375aa">
            What our Client’s<br />
            say about us ?
          </div>
          <div className="fi375ab">
            <div className="comment">
              <span>Look no further. These guys are great to work with! VERY GOOD
                COMPANY & GREAT TEAM SPIRIT! , strongly recommend them.</span>
              <blockquote>DAVID</blockquote>
              <p>Jr. Manager at SUBROS, India</p>
            </div>
            <img src="./media/img.png" alt="" />
          </div>
        </div>
      </section>
      <section className='ab375'>
        <Heading first={"Let’s Buid Something"} last={"AWESOME !"} />
<div className="ab375u">
        <div className="ab375a">

          <span className="ab375aa">
            One of the Tech Experts will reach out to you within next
            48 business hours.

          </span>
          <img src="./media/c.gif" alt="" />

          <span className="ab375ab">
            <p>Follow us on</p>
            <span className="icon">
              <img src="./media/insta.png" alt="" />
              <img src="./media/twitter.png" alt="" />
              <img src="./media/linked.png" alt="" />
            </span>
          </span>
        </div>
        <div className="ab375b" style={{ background: "url('./media/bgi.png')" }}>
 <span>
  <p className='a'>Drop us a message</p>
  <p className='b'>We would love to hear everything from you</p>
 </span>
          <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email"  name="" id="email" />
            <label htmlFor="number">Mobile</label>
            <input type="tel" name="" id="number" />
            <label htmlFor="subject">Subject</label>
            <input type="text" name="" id="subject" />
            <label htmlFor="textarea">Description</label>
            <textarea name="" id="textarea" cols="30" rows="10"></textarea>
<button type='submit'> Submit</button>
          </form>
        </div>
        </div>
      </section>
      <section className='fu675'>
        <div className="fu675a">
          <div className="a1 a4">
            <h1>Company</h1>
            <ul>
              <li>About us</li>
              <li>Portfolio</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="a2 a4">
          <h1> Contact</h1>
            <ul>
              <li>Quote</li>
              <li>infenito@gmail.com</li>
              <li>9843753330</li>
              
            </ul>
          </div>
          <div className="a3 a4">
          <h1>More</h1>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Linkedin</li>
         
            </ul>
          </div>
        </div>
<img src="./media/Group 41.png" alt="" />

      </section>
    </>
  )
}

export default First