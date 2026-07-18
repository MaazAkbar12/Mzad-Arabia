import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";
import NewAdsPost from "../pages/NewAdsPost";



 

 



const AdminRoutes = () => {


    return (

        <Routes>


            <Route 
                path="/" 
                element={<AdminLayout />}
            >


                <Route 
                    index 
                    element={<Dashboard />}
                />

                {/* 2. New Ad Post ka nested route add karein */}
                <Route 
                    path="newadspost" 
                    element={<NewAdsPost />}
                />


            </Route>


        </Routes>

    );


};



export default AdminRoutes;