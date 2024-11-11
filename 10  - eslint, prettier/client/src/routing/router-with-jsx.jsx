import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home-page';
import { PostsPage } from '../pages/posts-page';
import { AboutPage } from '../pages/about-page';

export function AppRouterWithJsx() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/posts" Component={PostsPage} />
        <Route path="/about" Component={AboutPage} />
      </Routes>
    </Router>
  );
}
