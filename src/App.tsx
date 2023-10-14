import dotenv from 'dotenv';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AkMainFrame } from './frames';
import { AkHome } from './pages';
import './i18n';
import './styles.less';

dotenv.config({path: './config/env/.env.dev.local'});

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AkMainFrame />}>
          <Route index element={<AkHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
