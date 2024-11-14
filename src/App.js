import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Louding from "./component/Louding";

// Lazy loading للمكونات
const Home = React.lazy(() => import("./component/Home"));
const Navbar = React.lazy(() => import("./component/Navbar"));
const AuthForms = React.lazy(() => import("./component/AuthForms"));
const EventsGrid = React.lazy(() => import("./component/EventsGrid"));
const EventDetails = React.lazy(() => import("./component/EventDetails"));
const Footer = React.lazy(() => import("./component/Footer"));
const About = React.lazy(() => import("./component/ِAbout"));
const Contact = React.lazy(() => import("./component/Contact"));
const ProfileManagement = React.lazy(() => import("./component/ProfileManagement"));  // إضافة صفحة ProfileManagement
const NotFound = React.lazy(() => import("./component/Not_Found"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Louding />}>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/auth" element={<AuthForms />} />
            <Route path="/events" element={<EventsGrid />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile-management" element={<ProfileManagement />} /> {/* مسار صفحة تعديل الملف الشخصي */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>
    </HashRouter>
  );
}

export default App;
