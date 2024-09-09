import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Analysis, Auth, Dashboard, Home, HomeLayout, Weather, } from './pages/index.js'
import { AnalyseReport, LoginForm, SignupForm, Upload } from './components/index.js'
import { Provider } from 'react-redux'
import store from './store/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "home/analysis",
            element: <Analysis />,
            children:[
              {
                path: ":analysis?",
                element: <Upload />
              },
              {
                path: "report",
                element: <AnalyseReport />
              },

            ]
          },
        ]
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/weather",
        element: <Weather />
      },
    ]
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <LoginForm />
      },
      {
        path: "signup",
        element: <SignupForm />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
