import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Post from './Post/Post';
import NewPost from './Post/NewPost';
import EachPost from './Post/EachPost';
import Shop from './Shop/Shop';
import Map from './Shop/Map';
import Filter from './Shop/Filter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/post" component={Post} />
          <Route exact path="/new" component={NewPost} />
          <Route exact path="/post/:id" component={EachPost} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/filter" component={Filter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
