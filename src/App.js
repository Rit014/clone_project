import React, { useEffect, useState } from 'react';
import './Component/app.css';
import axios from 'axios';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import Saved from './Component/Saved';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [images, setImages] = useState([])
  const [search, setSearch] = useState(null)
  const [loader, setLoader] = useState(true)
  const [save, setSave] = useState([])

  const API_KEY = "fW6PwAIXl1Jot5FyXPW9Z3YPwn2KCVm4nP8SAi1VhNxv3JI5aNh0JCon";
  // const URL = "https://api.pexels.com/v1/search?query=nature&per_page=1";

  useEffect(() => {

    const fetchImage = async () => {
      const response = await axios.get(`
      https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      )
      // console.log(response.data.photos);
      setImages(response.data.photos);
      setLoader(false);
      console.log(images);
    }

    const data = JSON.parse(localStorage.getItem("images"))
    if(data){
      setSave(data)
    }

    fetchImage();

  }, [search])

  useEffect(() => {
    if(save.length != 0){
      const json = JSON.stringify(save);
      localStorage.setItem("images", json);
    }
  },[save])

  console.log("Image is saved " , save);


  return (
    <>
      <Router>
        <NavBar setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home images={images}
            loader={loader} save={save} setSave={setSave} />} />
          <Route path='/saved' element={<Saved save={save} loader={loader} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
