import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { NavbarLayout } from '@layouts/navbar-layout';
import { HomePage } from '@pages/home-page';
import { PostsPage } from '@pages/posts-page';
import { AboutPage } from '@pages/about-page';
import { SinglePostPage } from '@pages/single-post-page';

const router = createBrowserRouter([{
  path: routes.HomePage,
  Component: NavbarLayout,
  children: [
    {
      index: true,
      Component: HomePage,
    },
    {
      path: routes.PostsPage,
      Component: PostsPage,
    },
    {
      path: routes.AboutPage,
      Component: AboutPage,
    },
    {
      path: routes.SinglePostPage,
      Component: SinglePostPage,
    },
  ],
}]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
