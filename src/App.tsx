import { Dashboard } from "./pages/dashboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BrainlyLandingPage from "./pages/landingPage"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrainlyLandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter> 
  </ThemeProvider>
}

export default App