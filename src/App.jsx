
import './App.css'
import React, { useEffect } from "react";
import Header from './View/Components/Header'
import { Route, Routes } from "react-router-dom"
import CreateContainer from './Controllers/CreateContainer';
import MainContainer from './Controllers/MainContainer';
import { AnimatePresence } from "framer-motion";
import { useStateValue } from './Model/context/StateProvider';
import { getAllFoodItems } from './Controllers/utils/FirebaseFunctions';
import { actionType } from './Model/context/Reducer';

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
  <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
      </main>
    </div>
  </AnimatePresence>
  )
}

export default App
