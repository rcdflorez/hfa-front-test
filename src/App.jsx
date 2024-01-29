import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Team from './pages/Team/Team'
import Events from './pages/Events/Events'
import Titan from './pages/Titan/Titan'
// import { useContextGlobal } from './context/global.context'

function App() {
  // const {state} = useContextGlobal()
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/events' element={<Events />} />
        <Route path='/titan-100' element={<Titan />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
  return (
      <RouterProvider router={router} />
  );
}

export default App
