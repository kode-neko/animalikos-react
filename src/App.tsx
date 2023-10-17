import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AkMainFrame } from './frames';
import { AkCreate, AkEdit, AkHome } from './pages';
import './i18n';
import './styles.less';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AkMainFrame />}>
          <Route index element={<AkHome />} />
          <Route path='/edit/:id' element={<AkEdit />} />
          <Route path='/create' element={<AkCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
