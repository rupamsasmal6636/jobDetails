import './App.css';
import JobDetails from './Pages/JobDetails/Components/JobDetails';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Jobs from './Pages/JobDetails/Components/Jobs';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Jobs/>} />
          <Route exact path="/JobDetails/:id" element={<JobDetails/>} />
        </Routes>
      </Router>
      {/* <Jobs/>
      <JobDetails/> */}
    </div>
  );
}

export default App;
