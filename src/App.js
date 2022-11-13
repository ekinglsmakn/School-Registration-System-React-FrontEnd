import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from "./Layout/Header";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddStudent from "./Students/AddStudent";
import AddCourse from "./Courses/AddCourse";
import ViewStudent from "./Students/ViewStudent";
import ViewCourse from "./Courses/ViewCourse";
import EditStudent from "./Students/EditStudent";
import EditCourse from "./Courses/EditCourse";
import DetailsCourse from "./Courses/DetailsCourse";
import Footer from "./Layout/Footer";



function App() {
    return (
        // <div className="App" style={{ backgroundImage:`url(${background})` ,backgroundRepeat:"no-repeat",backgroundSize:"contain"
        //    }}>
        <div className="App">
           <div>

               <Router>
                   <Header/>
                  <div className="container">
                      <Routes>
                          <Route exact path="/" element = {<Home/>}/>
                          <Route exact path="/addstudent" element = {<AddStudent/>}/>
                          <Route exact path="/editstudent/:id" element = {<EditStudent/>}/>
                          <Route exact path="/viewstudent" element = {<ViewStudent/>}/>
                          <Route exact path="/addcourse" element = {<AddCourse/>}/>
                          <Route exact path="/editcourse/:id" element = {<EditCourse/>}/>
                          <Route exact path="/detailscourse/:id" element = {<DetailsCourse/>}/>
                          <Route exact path="/viewcourse" element = {<ViewCourse/>}/>
                      </Routes>
                  </div>

               </Router>
           </div>
            <div>
                <Footer/>
            </div>

        </div>
    );
}

export default App;
