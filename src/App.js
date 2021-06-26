
import { useState, useEffect, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Bucket from "./pages/bucket/Bucket";
import Header from './components/header/Header';
import MainContent from "./components/mainContent/mainContent";

import './App.css';

const arrayItems = [
  {
      id: 'customId',
      nameItem: 'Sneakers 1',
      model: 'Адидас',
      link: "https://cdn.aizel.ru/i/550x826/1246882.jpg",
      amount: 10,
  },
  {
      id: 'customId2',
    nameItem: 'Sneakers 2',
    model: 'Адидас',
      link: "https://cdn.aizel.ru/i/550x826/1246882.jpg",
      amount: 4,
  },
  {
      id: 'customId3',
      nameItem: 'Sneakers 3',
      model: 'Адидас',
      link: "https://cdn.aizel.ru/i/550x826/1246882.jpg",
      amount: 14,
  },
    {
        id: 'customId124122',
        nameItem: 'Sneakers 4',
        model: 'Адидас',
        link: "https://cdn.aizel.ru/i/550x826/1246882.jpg",
        amount: 4,
    },
    {
        id: Math.random() * 10000,
        nameItem: 'Sneakers 5',
        model: 'Адидас',
        link: "https://cdn.aizel.ru/i/550x826/1246882.jpg",
        amount: 0,
    },
];

function App() {
    const [inputValueSearch, setValue] = useState('');
    const [goods, setItems] = useState([]);
    const [bucketItems, setBucketItems] = useState([]);

    const addItemInBucket = (itemId) => {
        const itemForBucket = goods.find(( { id } ) => id === itemId);
        const isItemInBucket = bucketItems.find(( item ) => item.id === itemId);

        if (isItemInBucket) {
            const itemsForBucket = bucketItems.map((bucketItem) => {
                if (bucketItem.id === itemId) {
                    return {
                        ...bucketItem,
                        amount: bucketItem.amount + 1,
                    }
                }
                return bucketItem;
            });
            setBucketItems(itemsForBucket);
        } else {
            setBucketItems((prevState) =>
                [...prevState, { ...itemForBucket, amount: 1 }]
            )
        }
    }
    
    const onItemClick = (itemId) => {
        const filteredItems = goods.map((item) => {
            if (item.id === itemId) {
                return {
                    ...item,
                    amount: item.amount - 1
                }
            }
            return item
        });
        setItems(filteredItems);

        addItemInBucket(itemId);
    }

    const onItemsSearch = (e) => {
        const { value } = e.target;
        setValue(value);

        const itemsAfterFilter = arrayItems.filter(({nameItem}) => (
            nameItem.toLowerCase().includes(value.toLowerCase()))
        );
        setItems(itemsAfterFilter);
    }


    useEffect(() => {
        setTimeout(() => setItems(arrayItems), 2000);
    }, []);

  const countItemsBucket =
      bucketItems.length &&
      bucketItems.reduce((acc, currentItem) => {
      return acc + currentItem.amount
  },  0)

  return (
    <div className="App">
        <Router>
        <Header
            countItems={countItemsBucket}
            onChangeValueUser={onItemsSearch}
            inputValueSearch={inputValueSearch}
        />
            <Switch>
                 <Route exact path="/">
                   <MainContent
                       addItemToBucket={onItemClick}
                       arrayBlock={goods}
                   />
                 </Route>
                 <Route path="/bucket">
                    <Bucket
                        setBucketItems={setBucketItems}
                        bucketItems={bucketItems}
                    />
                 </Route>
            </Switch>
        </Router>
    </div>
  );
}


export default App;
