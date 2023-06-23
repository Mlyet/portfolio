import { Fragment } from 'react';
import Navbar from './components/Navbar';
import LineAnimation from './components/LineAnimation';
import StartPage from './components/StartPage';
import Me from './components/Me';
import Course from './components/Course';
import Project from './components/ProjectMe';
import Skill from './components/Skill';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

function App() {
  return (
      <Fragment>
        <Navbar />
        <LineAnimation />
        <StartPage />
        <Me />
        <Course />
        <Skill />
        <Project />
        <Hobbies />
        <Footer />
      </Fragment>
  );
}

export default App;
