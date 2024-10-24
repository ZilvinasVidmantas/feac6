import { HomePage } from '../pages/home-page';
import { PostsPage } from '../pages/posts-page';
import { AboutPage } from '../pages/about-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavbarLayout } from '../layouts/navbar-layout';

// Outlet ir Layout
const router = createBrowserRouter([{
  path: '/',
  Component: NavbarLayout,
  children: [
    {
      path: '/',
      Component: HomePage
    },
    {
      path: '/posts',
      Component: PostsPage
    },
    {
      path: '/about',
      Component: AboutPage
    }
  ]
}]);

export const AppRouter = () => <RouterProvider router={router} />

