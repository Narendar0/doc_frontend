import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Otp from "./components/otp";
import Dashboard from "./components/userdashboard";
import ApplicationClinic from "./dashboard/clinicform/applicationClinic";
import UploadClinic from "./dashboard/clinicform/uploadClinic";
import ApplicationHospital from "./dashboard/hospitalform/applicationHospital";
import DoctorDetails from "./dashboard/hospitalform/doctorDetails";
import UploadHospital from "./dashboard/hospitalform/uploadHospital";
import Adminlogin from "./admin/adminLogin";
import Admindashboard from "./admin/admindashboard";
import OwnClinicList from "./admin/ownclinicList";
import HospitalList from "./admin/hospitalList";
import ConsultationClinic from "./dashboard/clinicform/consultationClinic";
import ViewUserDetails from "./admin/viewuserdetails";
import ViewHospitalDetails from "./admin/viewhospitaldetails";
import Filter from "./components/filter";
// import Geolocation from "./components/geolocation";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>



            
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/userdashboard" element={<Dashboard />} />
            <Route path="/applicationClinic" element={<ApplicationClinic />} />
            <Route path="/uploadClinic" element={<UploadClinic />} />
            <Route path="/applicationHospital" element={<ApplicationHospital />}/>
            <Route path="/doctorDetails" element={<DoctorDetails />} />
            <Route path="/uploadHospital" element={<UploadHospital />} />
            <Route path="/adminLogin" element={<Adminlogin />} />
            <Route path="/admindashboard" element={<Admindashboard />} />
            <Route path="/ownclinicList" element={<OwnClinicList />} />
            <Route path="/hospitalList" element={<HospitalList/>} />
            <Route path="/consultationClinic" element={<ConsultationClinic />}/>
            <Route path="/viewuserdetails/:id" element={<ViewUserDetails />}/>
            <Route path="/viewhospitaldetails/:id" element={<ViewHospitalDetails />}/>
            <Route path="/filter" element={<Filter/>}/>
            {/* <Route path="/geolocation" element={<Geolocation/>}/> */}







          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
