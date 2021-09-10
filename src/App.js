import{
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import history from './utils/history';

import DefaultLayout from './layouts/DefaultLayout';
import AdminLayout from './layouts/AdminLayout';
import FullLayout from './layouts/FullLayout';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

import HomePage from './pages/user/Home';
import ProductDetailPage from './pages/user/ProductDetail';
import AboutPage from './pages/user/About';
import CartPage from './pages/user/Cart';
import ContactPage from './pages/user/Contact';
import BlogsPage from './pages/user/Blog';

import DashboardPage from './pages/admin/Dashboard';

import NotFoundPage from './pages/NotFound';

import 'antd/dist/antd.less';
import './ResetApp.css';
import './App.css';



function App() {
  return (
    <Router history={history}>
        <Switch>
          <DefaultLayout exact path="/" component={HomePage} />
          <DefaultLayout exact path="/about" component={AboutPage} />
          <DefaultLayout exact path="/cart" component={CartPage} />
          <DefaultLayout exact path="/contacts" component={ContactPage} />
          <DefaultLayout exact path="/blogs" component={BlogsPage} />
          <DefaultLayout exact path="/product/:id" component={ProductDetailPage} />

          <AdminLayout exact path="/admin" component={DashboardPage} />

          <FullLayout exact path="/login" component={LoginPage} />
          <FullLayout exact path="/register" component={RegisterPage} />

          <FullLayout component={NotFoundPage} />
        </Switch>
    </Router>
  );
}

export default App;
