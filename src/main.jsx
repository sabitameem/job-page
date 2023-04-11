import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Statistics from './components/Statistics'
import AppliedJob from './components/AppliedJob'
import Blog from './components/Blog'
import JobDetails from './components/JobDetails'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([{
  path: '/',
  element: <App></App>,
  errorElement: <ErrorPage></ErrorPage> ,
  
  children:[
   {
    path: '/',
    element: <Home></Home>,
    loader: ()=>fetch('/jobs.json'),
   },
   {
    path: 'job/:id',
    element: <JobDetails></JobDetails>,
    loader :async({params})=> {
      const res= await fetch('jobs.json')
      const data = await res.json();

      const findedData = data.find(phone =>phone.id==params.id)
      return findedData;}
   },
   {
    path:'/statistics',
    element: <Statistics></Statistics>
   },
   {
    path: '/appliedJob',
    element: <AppliedJob></AppliedJob>
   },
   {
    path: '/blog',
    element: <Blog></Blog>
   },
    
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
