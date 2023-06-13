import { useRoutes } from 'react-router-dom';
import MainPage from '../view/MainPage';
import BANPage from '../view/BANPage';
import NotFoundPage from '../view/404Page';

const routes = [
  {
    path: '',
    element: <MainPage />
  },
  {
    path: '/ban',
    element: <BANPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

const Routes = () => {
  return useRoutes(routes);
};

export default Routes;
