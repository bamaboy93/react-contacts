import { Route, Routes } from "react-router-dom";
import Layout from "./views/Layout";
import Dashboard from "./views/Dashboard";
import Contacts from "./views/Contacts";
import AddContact from "./views/AddContact";
import Calendar from "./views/Calendar";
import Faq from "./views/Faq";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="add" element={<AddContact />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="faq" element={<Faq />} />
          <Route path="*" element={<div>Oops 404!</div>} />
        </Route>
      </Routes>
    </>
  );
}
