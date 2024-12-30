import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// layouts
import DefaultLayout from './layouts/DefaultLayout.jsx'
import BlankLayout from './layouts/BlankLayout.jsx'

// Pagine
import NotFound from "./pages/NotFound.jsx"
import Index from './pages/Index.jsx'
import Show from './pages/Show.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* Redirect dalla root alla pagina characters */}
            <Route path="/" element={<Navigate to="/characters" replace />} />
            <Route path="/characters">
              <Route index element={<Index />} />
              <Route path=":id" element={<Show />} />
            </Route>
            {/* <Route path='/teams'>
              <Route index element={<Index />}></Route>
              <Route path=':id' element={<Show />}></Route>
            </Route> */}
          </Route>
          <Route element={<BlankLayout />}>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
