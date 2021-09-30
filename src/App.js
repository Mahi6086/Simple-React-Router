
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Friends from './component/Friends/Friends';
import Notfound from './Not Found/Notfound';
import About from './component/About/About';
import Header from './component/Header/Header';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Culture from './component/Culture/Culture';
import Posts from './component/Posts/Posts';
import PostDetail from './component/PostDetail/PostDetail';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Header></Header>
        
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/friends">
          <Friends></Friends>
          </Route>
          <Route path="/posts">
          <Posts></Posts>
          </Route>
          <Route path="/post/:postId">
          <PostDetail></PostDetail>
          </Route>
          <Route path="/friend/:friendId">
          <FriendDetails></FriendDetails>
          </Route>
          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>
          <Route path="/notfound">
            <Notfound></Notfound>
          </Route>
          <Route exact path="/">
           <Home></Home>
          </Route>
         
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
