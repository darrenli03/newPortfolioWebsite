import { useEffect, useState } from 'react'
import {
  faJava,
  faPython,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'



const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About Me".split('')}
              idx={15}
            />
          </h1>
          <p>
            I'm currently a Computer Science student at Duke University eager to
            familiarize myself with the tech industry through internships and research.
          </p>
          <p align="LEFT">
            My main skills include Java, Python, and web development (Javascript, React, HTML, and CSS).
            I'm a quick and dedicated learner, and I look forward to developing my skills through
            my future experiences!
          </p>
          <p>
            On the side, I like to play violin, chess, and video games, read (my favorite genres are
            sci-fi and fantasy), and watch movies. I also love to try new foods and explore new places!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" transform={{ rotate: -90 }}/>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#008000" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faCss3Alt} color="#264de4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
