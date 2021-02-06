import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
    </BrowserRouter>
  )
}