import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import './App.css';
import './assets/css/grid.css';
import './assets/scss/color.scss'
import './assets/css/style.scss'
import {useEffect, useState} from "react";
import ProtectedRoute from "./components/protectedRoute";
import About from "./pages/about";

import Login from './pages/authentication/login'
import ForgotPassword from './pages/authentication/forgotPassword';
import {useDispatch, useSelector} from "react-redux";
import useHttpHandler from "./hooks/httphandler.hook";
import {setUserInfo} from "./store/reducers/app.reducer";
import {ToastContainer} from "react-toastify";
import ResetPassword from "./pages/authentication/resetPassword";
import Loader from "./components/loader";
import Logout from "./pages/authentication/logout";
import Settings from './pages/Settings';
import PurchaseInvoiceController from './pages/purchaseInvoice';
import AddPurchaseInvoice from './pages/purchaseInvoice/addPurchaseInvoice';
import ViewPurchaseInvoice from './pages/purchaseInvoice/viewPurchaseInvoice';
import ViewLocationController from './pages/location';
import AddLocationController from './pages/location/addLocation';
import ViewCurrencyController from './pages/currency';
import EditPurchaseInvoice from './pages/purchaseInvoice/editPurchaseInvoice';
import Admin from './pages/userManagement/admin';
import CreateNewAdmin from './pages/userManagement/admin/createNewAdmin';
import AdminDetails from './pages/userManagement/admin/details';
import EditAdmin from './pages/userManagement/admin/editAdmin';
import FulfillementController from './pages/reports/fulfillement-reports';


function App() {const [loading, setLoading] = useState(true)
  const {post} = useHttpHandler()
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.app.userInfo)
  const [isLoggedIn, setIsLoggedIn] = useState(null);
    const logIn = () => {
        setIsLoggedIn(true);
    };
    const logOut = () => {
        setIsLoggedIn(false);
    };


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      if (!userInfo) {
        post('get_profile').then((res) => {
          setLoading(false)
          const status = res.data.status
          const data = res.data.data
          if (status.result == '200') {
            dispatch(setUserInfo(data))
          }
        }).catch(() => setLoading(false))
      }
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <Loader/>
  } else {

    return (
        <div className="App">
          <BrowserRouter>
            <ToastContainer
                autoClose={2000}
            />
            <Routes>
              <Route path="/">
                <Route index={true} element={<Login/>}/>
                <Route path="/logout" element={<Logout />}/>

                <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}/>}>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/test" element={<About/>}/>
                </Route>

                <Route path="/forgotPassword" element={<ForgotPassword/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            
               <Route path="/purchase-invoices">
                  <Route index={true} element={<PurchaseInvoiceController/>}/>
                  <Route path='view-purchase/:billnumber' element={<ViewPurchaseInvoice/>}/>
                  <Route path="add-purchase-order">
                      <Route index={true} element={<AddPurchaseInvoice/>}/>
                    {/*<Route index={true} element={<Member/>}/>
                    <Route path="details/:userId" element={<MemberDetails/>}/> */}
                  </Route>
                  <Route path="edit-purchase-order/:billnumber">
                      <Route index={true} element={<EditPurchaseInvoice/>}/>
                    {/*<Route index={true} element={<Member/>}/>
                    <Route path="details/:userId" element={<MemberDetails/>}/> */}
                  </Route>
               </Route>

                
                <Route path="/settings" element={<Settings />} />


                 <Route path="/location">
                  <Route index={true} element={<ViewLocationController/>}/>
                  <Route path='view-location' element={<ViewLocationController/>}/>
                  <Route path="add-location">
                      <Route index={true} element={<AddLocationController/>}/>
                    {/*<Route index={true} element={<Member/>}/>
                    <Route path="details/:userId" element={<MemberDetails/>}/> */}
                  </Route>
                </Route>

                <Route path="/currency">
                  <Route index={true} element={<ViewCurrencyController/>}/>
                  <Route path='view-currency' element={<ViewCurrencyController/>}/>
                 
                </Route>
               
                <Route path="/fulfillemnt-reports" element={<FulfillementController />} />


                
                <Route path="/admin">
                    <Route index={true} element={<Admin/>}/>
                    <Route path="create-new-admin/:id" element={<CreateNewAdmin/>}/>
                    <Route path="details/:userId" element={<AdminDetails/>}/>
                    <Route path="edit-admin/:userId" element={<EditAdmin/>}/>
                  </Route>

                <Route path="*" element={<p>There's nothing here: 404!</p>}/>






              </Route>

              


            </Routes>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
