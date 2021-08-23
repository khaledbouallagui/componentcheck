import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import comments from './components/comments/comments';
import  MainVideo from '/component/MainVideo/MainVideo';
import Navigation from './components/navigation/Navigation';
import{ Footer, suggestion} from  '/components/suggestion/suggestion';
  


function App() {
  return (
    <div>
     <Navigation/>
    <div class="row">
      <div className="col-md-4">
       <suggestion/> 
      </div>
    </div>
    </div>
    
  );
}

export default App;
