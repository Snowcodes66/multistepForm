import "./App.css";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./components/uiPage/PersonalInfo";
import Plan from "./components/uiPage/Plan";
import Summary from "./components/uiPage/Summary";
import AddOnPage from "./components/uiPage/AddPage";
import FormProvider from "./store/FormProvider";
import Finished from "./components/uiPage/Finished";


function App() {

  return (
    <FormProvider>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/personal" element={<PersonalInfo />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/add" element={<AddOnPage />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/thanks" element={<Finished />} />
      </Routes>
    </FormProvider>
  );
}

export default App;
