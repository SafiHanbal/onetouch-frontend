import { Routes, Route } from 'react-router-dom';

import ChatPage from './routes/chat-page/chat-page.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {
  return (
    <Routes>
      <Route index element={<ChatPage />} />
      <Route path="/auth/*" element={<Authentication />} />
    </Routes>
  );
};

export default App;
