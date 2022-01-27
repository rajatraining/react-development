import React, {useState, useEffect} from "react";


function CallBookServiceByHooks() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);  // const (Var type) [items, setItems]
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {   // () anonymous function => fat arrow execute actions
      fetch("http://localhost:7001/library/books")
        .then(res => res.json()) // output -> result
        .then(                    //
          (result) => {      
            setIsLoaded(true);  // isLoaded = true
            setItems(result);  // items = result
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.bookName} -- {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }

  export default CallBookServiceByHooks;