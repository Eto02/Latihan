import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import HelloComponent from './components/HelloComponent';
// import StateFullComponent from './container/StateFullComponent';
// import YouTubeComp from './components/YouTubeComp/YouTubeComp';
import Home from './container/Home/Home';
// import { createStore } from 'redux';
// import {Provider} from 'react-redux';
// import rootReducer from './redux/reducer/globalReducer'


//Store
// const store= createStore(rootReducer);

// const newComp=<Provider store={store}><Home /></Provider>

ReactDOM.render(<Home />,document.getElementById('root'));



