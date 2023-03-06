import {Routes, Route} from 'react-router-dom'
import Layout from './compnents/Layout';
import Public from './compnents/Public';
import DashLayout from './compnents/DashLayout';
import Shifts from './features/shifts/Shifts';
import ShiftTemplates from './features/shiftTemplates/ShiftTemplates';
import Personal from './features/personal/Personal';


function App() {

  return (
    <Routes>
      <Route path="/" element = {<Layout/>}>
        <Route index element={<Public/>} />
          <Route path="dash" element={<DashLayout/>}>
            
            <Route index element={<Shifts/>}/>
            
            <Route path='templates' element={<ShiftTemplates/>}/>

            <Route path='personal' element={<Personal/>}/>

          </Route>
      </Route>
    </Routes>

  );
}

export default App;
