import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuFrame } from './frames';
import { Home } from './components';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuFrame />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
