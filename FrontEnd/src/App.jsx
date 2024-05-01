import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { UploadFile } from "./pages/UploadFile"
import { DetailsJobPage } from "./pages/DetailsJobPage"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/upload' element={<UploadFile />} />
          <Route path='/jobmatch' element={<DetailsJobPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
