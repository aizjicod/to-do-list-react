import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import SinglePage from "./SinglePage"

const About = () => {
  return (
    <>
      <div>hello from about page</div>
      <nav>
        <ul>
          <li>
            <Link to={`/about/about-app`}>About App</Link>
          </li>
          <li>
            <Link to={`/about/about-author`}>About Author</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path={`/:slug`} element={<SinglePage />} />
      </Routes>
    </>
  )
}
export default About
