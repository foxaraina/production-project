import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

const enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage/>
  }
}
