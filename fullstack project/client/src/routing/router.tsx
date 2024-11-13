import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavbarLayout } from '@layouts/navbar-layout';
import { HomePage } from '@pages/home-page';
import { PostsPage } from '@pages/posts-page';
import { AboutPage } from '@pages/about-page';
import { SinglePostPage } from '@pages/single-post-page';
import { RegisterPage } from '@pages/auth/register-page';
import { LoginPage } from '@pages/auth/login-page';
import { routes } from './routes';

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
    {
      path: routes.Auth.RegisterPage,
      Component: RegisterPage,
    },
    {
      path: routes.Auth.LoginPage,
      Component: LoginPage,
    },
  ],
}]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
