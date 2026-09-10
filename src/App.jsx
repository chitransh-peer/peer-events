import { Route, Routes } from 'react-router-dom'
import ITILOverview from './pages/ITILOverview.jsx'
import EventsPage from './pages/EventsPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ITILOverview />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  )
}

export default App
