import React, { useCallback } from "react";

const ComponentExample = () => {
  const onSearch = useCallback((e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText); // TODO: send search data to the server
  }, []);
  return (<>
    <form onSubmit={onSearch}>
    <input type="text" name="search" placeholder="type search text here..."/>
    <input type="submit" value="Search"/>
    </form>
  </>);
}

  export default ComponentExample;
