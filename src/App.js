import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectListPage from './components/ProjectListPage';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import EditProjectPage from './pages/EditProjectPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';

function App() {
  return (
    <div className="App">
      {/* Below: ADD <Navbar>, <Routes> & <Route> */}

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<IsPrivate> <ProjectListPage /></IsPrivate>} />
        <Route path="/projects/:projectId" element={<IsPrivate> <ProjectDetailsPage /></IsPrivate>} />
        <Route path="/projects/edit/:projectId" element={ <IsPrivate> <EditProjectPage /> </IsPrivate>} />    
        <Route path="/signup" element={ <IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={ <IsAnon> <LoginPage /> </IsAnon>} />
      </Routes>
    </div>
  );
}

export default App;
