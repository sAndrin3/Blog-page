import './main.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TheJitu from '../pages/TheJitu';
import Fullstack from '../pages/Fullstack';
import Training from '../pages/Training';
import Application from '../pages/Application';
import Notfound from '../pages/Notfound';

function Main() {
  const blogs = [
    {
      title: 'The Jitu',
      content: 'The Jitu produces world-class software developers',
      to: '/theJitu',
    },
    {
      title: 'Full-stack Development',
      content: 'Software developers at The Jitu are well equipped and have good skills in full-stack development',
      to: '/fullstack',
    },
    {
      title: 'Training',
      content: 'The trainers at The Jitu are professionals and have good conduct when interacting with the trainees',
      to: '/training',
    },
    {
      title: 'Application',
      content: 'One can apply for a job or training through The Jitu website',
      to: '/application',
    },
  ];

  return (
    <div className="main">
      <div className="main-content">
        {blogs.map((blog, index) => {
          return (
            <div className="blog" key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <Link style = {{textDecoration:'none'}}to={blog.to}>Read More</Link>
            </div>
          );
        })}
      </div>
      <div className="aside">
        {blogs.map((blog, index) => {
          return (
            <div className="blog-aside" key={index}>
              <h3>{blog.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/theJitu" element={<TheJitu />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/training" element={<Training />} />
        <Route path="/application" element={<Application />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
