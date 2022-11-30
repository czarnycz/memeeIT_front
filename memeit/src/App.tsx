
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartPage } from './components/StartPage/StartPage';


import { AppContextProvider } from './context/AppContext';
import { Profile } from './components/Profile';
import { RegisterForm } from './components/RegisterForm/RegisterForm';
import { Login } from './components/Login/Login';
import { Wrapper } from './components/Wrapper/Wrapper';
import { RedirectHandler } from './components/RedirectHandler';
import { DataContextProvider } from './hooks/DataContext';
import useAxios from './hooks/useAxios';
import { NewPost } from './components/Post/NewPost';
import { PostProvider } from './hooks/NewPostContext';



function App() {
  const axios = useAxios();

  return (
    <AppContextProvider>
      
        <PostProvider>
          <DataContextProvider>
            <ChakraProvider>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Wrapper />}>
                    <Route index element={<StartPage />}></Route>
                    <Route path='/profile' element={<Profile />}></Route>
                  </Route>
                  <Route path='/register' element={<RegisterForm />}></Route>
                  <Route path='/login' element={<Login />}></Route>
                  <Route path='/addPost' element={<NewPost />}></Route>
                  
                  <Route
                    path="/login/redirect"
                    element={<RedirectHandler />}
                  ></Route>
                </Routes>
              </BrowserRouter>
            </ChakraProvider>
          </DataContextProvider>
        </PostProvider>
     
    </AppContextProvider>
  );
}

export default App;
