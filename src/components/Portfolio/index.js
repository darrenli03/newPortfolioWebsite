import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { getDocs, collection } from 'firebase/firestore'
// import { db } from '../../firebase';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  //   useEffect(() => {
  //     getPortfolio()
  //   }, [])

  //   const getPortfolio = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'portfolio'))
  //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  //   }

  //   const renderPortfolio = (portfolio) => {
  //     return (
  //       <div className="images-container">
  //         {portfolio.map((port, idx) => {
  //           return (
  //             <div className="image-box" key={idx}>
  //               <img
  //                 src={port.image}
  //                 className="portfolio-image"
  //                 alt="portfolio"
  //               />
  //               <div className="content">
  //                 <p className="title">{port.name}</p>
  //                 <h4 className="description">{port.description}</h4>
  //                 <button className="btn" onClick={() => window.open(port.url)}>
  //                   View
  //                 </button>
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   }

  return (
    <>
      <div className="container portfolio-page">
        <div className = "title">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Portfolio'.split('')}
              idx={15}
            />
          </h1>
        </div>
        {/* <div>{renderPortfolio(portfolio)}</div> */}
        
        <div className = "content">
          <h2 className = "title1"> 2023 Betty F. Brown Awards for Instrumental Excellence </h2>
          <iframe width="240" height="160" src="https://www.youtube.com/embed/JerLFXsPIfI" title="Charles Auguste de Bériot: Violin Concerto No.7, Op.76, 1st mov." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h2 className = "title2"> 2022 Indiana All-State Orchestra</h2>
          <iframe width="240" height="160" src="https://www.youtube.com/embed/QMvA-6ADYhU" title="Bach/Stokowski- Komm süsser tod" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="240" height="160" src="https://www.youtube.com/embed/XjGtZoUWLJA" title="Hanson Symphony No. 3 I- Andante lamentando- Agitato" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="240" height="160" src="https://www.youtube.com/embed/MI3-jl-7Z8w" title="Hanson Symphony No.3 II- Andante Tranquillo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="240" height="160" src="https://www.youtube.com/embed/PzsDSzT2W6s" title="Hanson Symphony No. 3- III- Tempo Scherzando" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="240" height="160" src="https://www.youtube.com/embed/EWURBLiC1l0" title="Hanson Symphony No.3- IV Largamente e pesante" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h2 className = "title3">TankTrouble Recreation (based off of tanktrouble.com)</h2>
          <a href="https://github.com/darrenli03/newPortfolioWebsite/raw/main/public/TankTroubleRecreate.jar" download="TankTroubleRecreate.jar">Click to dowload the jar file!</a>

          
        </div>
      </div>

      
      
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
