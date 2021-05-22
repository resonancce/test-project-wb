import logo from './logo.svg';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/header/Header';
import MainContent from "./components/mainContent/mainContent";

import './App.css';

const arrayItems = [
  {
    nameItem: 'closes',
    model: 'Адидас'
  },
  {
    nameItem: 'Одежда',
    model: 'Адидас'
  },
  {
    nameItem: 'Носки',
    model: 'Адидас'
  },
    {
        nameItem: 'Носки  123123123123',
        model: 'Адидас'
    },
    {
        nameItem: 'Носки 123123123123',
        model: 'Адидас'
    },
];

function App() {
  const [inputValueSearch, setValue] = useState('');

    const [items, setItems] = useState([]);

    const onItemsSearch = (e) => {
        const { value } = e.target;
        setValue(value);

        const itemsAfterFilter = arrayItems.filter(({nameItem}) => (
            nameItem.toLowerCase().includes(value.toLowerCase()))
        );

        setItems(itemsAfterFilter);

        console.log(itemsAfterFilter);
    }


    useEffect(() => {
        setTimeout(() => setItems(arrayItems), 2000)

    }, []);

  return (
    <div className="App">
        <Header
            onChangeValueUser={onItemsSearch}
            inputValueSearch={inputValueSearch}
        />
        <Router>
            <Switch>
                 <Route exact path="/">
                     <>
                   <MainContent arrayBlock={items} />
                   <div style={{
                       display: "flex",
                     justifyContent: 'center'
                 }}>
            {
                items.length === 0 && (
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )
            }
               </div>
               
               </>
               
                 </Route>
                 <Route path="/bucket">
                    <div>
                        bucket page
                    </div>
                </Route>

            </Switch>
        </Router>
    </div>
  );
}


export default App;
