import { Fragment } from 'react';
import HomePage from './components/home/Home';
import Cursor from './components/cursor/Cursor';
import AboutMe from './components/about-me/AboutMe';
import Langages from './components/langages/langages';
import Project from './components/projects/Projects';

function App() {
  return (
      <Fragment>
        <Cursor />
        <HomePage />
        <AboutMe />
        <Langages />
        <Project />
      </Fragment>
  );
}

export default App;
