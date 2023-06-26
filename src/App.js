import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectListPage from './components/ProjectListPage';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import EditProjectPage from './pages/EditProjectPage';

function App() {
  return (
    <div className="App">
      {/* Below: ADD <Navbar>, <Routes> & <Route> */}

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } />    
      </Routes>
    </div>
  );
}

export default App;
