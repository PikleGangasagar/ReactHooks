import {createBrowserRouter} from "react-router-dom";
import ClassComp from "../components/ClassComp";
import FormValComp from "../components/FormValComp";
import ParentComp from "../components/ParentComp";
import MyImagesComp from "../components/MyImagesComp";
import ReactHooksComp from '../Hooks/ReactHooksComp';
import UseEffectComp from "../Hooks/UseEffectComp";
import UseStateComp from "../Hooks/UseStateComp";
import MyDetailsComp from "../components/MyDetailsComp";
import MySalaryComp from "../components/MySalaryComp";
import PageNotFoundComp from "../layout/PageNotFoundComp";

const router = createBrowserRouter([
    //1. Default routing 
    {path:"", element:<MyImagesComp/>},
    
    //2. Naming routing
    {path:"classcomp", element:<ClassComp/>},
    {path:"formval", element:<FormValComp/> },

    //3. Parameterized routing
    {path:"parent/:id", element:<ParentComp/>}, 

    //4.Child routing
    {path:"hooks", element:<ReactHooksComp/>,children:[
        {path:"details", element:<MyDetailsComp/>},
        {path:"salary", element:<MySalaryComp/>},
    ]},

    //5.Wild-Card routing
    {path:"*", element:<PageNotFoundComp/>}

])

export default router;