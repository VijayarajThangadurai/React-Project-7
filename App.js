import React, {useState, useMemo, useCallback} from 'react';
import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';
import './App.css';

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const listItems = useMemo(()=>[5,3,1,10,9],[]);
  const [listItem,setListItems] = useState(listItems);
  const [sortOrder, setSortOrder] = useState("descending");
  const changeTitleHandler = useCallback(() => {
  
    setListTitle("New Title");
    },[]);

  const ToggleSortOrder =useCallback(() =>{
    if(sortOrder === "descending"){
      setSortOrder('ascending');
    }else{
      setSortOrder('descending');
    }
  },[sortOrder]);
  
  const sortedList = useMemo(()=>{
    if(sortOrder=== 'descending'){
      return [...listItem].sort((a,b)=> a-b);
    }else{
      return [...listItem].sort((a,b)=> b-a);
    }
  },[listItem,sortOrder]);
  const listSortHandler = useCallback(()=>{
    setListItems(sortedList);
    ToggleSortOrder();
  },[sortedList,ToggleSortOrder]);
  return (
    <div className="app">  
    <DemoList title = {listTitle} items = {listItem}/>
<Button onClick={changeTitleHandler}>Change List Title</Button>
<Button className="button" onClick={listSortHandler}>{sortOrder==="descending" ? "Change to Ascending Order" : "Change to Descending Order"}</Button>    
 </div>
  );
}

export default App;
