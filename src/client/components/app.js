import React, { useState, useEffect } from 'react';

const App = (props) => {
  const [hide, setHide] = useState(false);
  const initialValue = [];

  // useEffect is a hook that allows you to perform side effects in function components
  const [items, setItems] = useState(initialValue);
  /*   useEffect(() => {
    // Update the document title using the browser API
    (async () => {
      const response = await fetch('https://locakhost:4000/items');
      const data = await response.json();
      setItems(data);
    })();
  }, []); */

  const handleClick = () => {
    setHide(!hide);
  };
  return (
    <div>
      <h1>App</h1>
      <button onClick={handleClick}>Hide</button>
      <div>
        {!hide && (
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

App.defaultProps = {
  items: [],
};

export default App;
