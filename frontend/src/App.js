import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Spots from "./components/Spots";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import EditSpotPage from "./components/EditSpotPage";
import { thunkGetAllSpots } from './store/spots';
import { thunkGetAllReviews } from './store/reviews';
import NotFound from "./components/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(thunkGetAllSpots())
  }, [dispatch])

  useEffect(() => {
    dispatch(thunkGetAllReviews())
}, [dispatch])
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <Spots />
          </Route>
          <Route exact path="/spots/:spotId">
            <EditSpotPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
