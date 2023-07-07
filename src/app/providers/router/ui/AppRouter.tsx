import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter: FC = () => {
  return (
        <Suspense fallback={'Loading...'}>
            <Routes>
                {
                    Object.values(RouteConfig).map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))
                }
            </Routes>
        </Suspense>
  )
}
