 import React from "react";
const DemoList = (props) => {
  const {items} = props;
//   const sortedList = useMemo(()=>{
//     console.log("items sorted");
//     return items.sort((a,b) => a-b);
//   }, [items]);
  console.log("Demo list Running");
  return (
    <div>
        <h2>
            {props.title}
        </h2>
        <ul>
            {items.map((item)=>(
                <li key ={item}>{item}</li>
            ))}
        </ul>
    </div>
  );
};
export default React.memo(DemoList);