import { Route } from "react-router-dom";

import UserHeader from '../UserHeader';
// import Header from '../Header';
import UserFooter from '../UserFooter';

function DefaultLayout(props) {
  const { exact, path, component: Component } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          <>
            <UserHeader /> 
            <div className="main-container">
              <Component {...routeProps} />
            </div>
            <UserFooter />
          </>
        )
      }}  
    />
  );
}

export default DefaultLayout;
