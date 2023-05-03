import {Routes, Route} from "react-router-dom"
import { Layout } from "./Layout";
import { HomePage } from "pages/HomePage";
import { UsersPage } from "pages/UsersPage";
import {UsersDetailPage} from "pages/UsersDetailPage";
import { AddUserPage } from "pages/AddUserPage";

export const App = () => {
  return (
   <Routes>
    <Route path={"/"} element= {<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path={"users"} element={<UsersPage/>}/>
      <Route path={"users/:id"} element={<UsersDetailPage/>}/>
      <Route path={"users/add"} element={<AddUserPage/>}/>
    </Route>

   </Routes>
  );
};
