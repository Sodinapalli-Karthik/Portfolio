import React from 'react';
import './portfolio.css';
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data=[
  {
    id:1,
    image:IMG1,
    title:"portfolio",
    github:"https://github.com",
    demo:'https://github.com'
  },
  {
    id:2,
    image:IMG2,
    title:"portfolio",
    github:"https://github.com",
    demo:'https://github.com'
  },
  {
    id:3,
    image:IMG3,
    title:"portfolio",
    github:"https://github.com",
    demo:'https://github.com'
  },
  {
    id:4,
    image:IMG4,
    title:"portfolio",
    github:"https://github.com",
    demo:'https://github.com'
  },
  {
    id:5,
    image:IMG5,
    title:"portfolio",
    github:"https://github.com",
    demo:'https://github.com'
  },
  {
    id:6,
    image:IMG6,
    title:"portfolio",
    github:"https://github.com",
    demo:'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">
{
  data.map((item)=>
    <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={item.image} alt=""/>
        </div>
          <h3>{item.title}</h3>
          <div className='portfolio_item-cta'>
          <a href={item.github} className='btn'>GitHub</a>
          <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
      </article>

  )
}
    
      
  

    </div>
   </section>
  )
}

export default Portfolio