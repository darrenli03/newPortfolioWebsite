import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const line1 = "Hi,"
  const line1Array = line1.split('')
  const line2 = "I'm Darren Li."
  const line2Array = line2.split('')
  const job = "Programmer / Student / Violinist"
  const jobArray = job.split('')
  var counter1 = 14
  var counter2 = counter1 + line1Array.length;
  var counter3 = counter2 + line2Array.length

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 15000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 style={{ fontSize: '60px' }}>
            {/* <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span> */}
             
            <AnimatedLetters
              letterClass={letterClass}
              strArray={line1Array}
              idx={counter1}
            />
            <br />
            
            {/* <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={line2Array}
              idx={counter2}
            />

            <h2>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={counter3}

              />
            </h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <br />
            <br />
          </h1>

        </div>
        {/* <Logo /> */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
