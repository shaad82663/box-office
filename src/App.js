import React from 'react';
import {Switch, Route} from "react-router-dom";
 
function App() {
  return (
      <Switch>
        <Route exact path="/">
            This is homepage.
        </Route>
        <Route exact path="/stared">
            This is stared.
        </Route>    

        <Route>
          This is 404 page.
        </Route>   
      </Switch>
  );
}

export default App;
