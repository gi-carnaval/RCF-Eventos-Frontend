import { Routes, Route } from 'react-router-dom'
import EventsTable from './components/template/EventsTable'
import SingleEvent from './components/template/SingleEvent'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<EventsTable />} />
      <Route path="/events/:id" element={<SingleEvent />} />
    </Routes>
  )
}
