import React from 'react'
import axios from 'axios';

export const App = () => {
  // test 01


  // const [search, setSearch] = React.useState('');
  // const [user, setUser] = React.useState(null);

  // React.useEffect(() => {
  //   const loadUser = async () => {
  //     const user = await getUser();
  //     setUser(user);
  //   };

  //   loadUser();
  // }, []);

  // function handleChange(event) {
  //   setSearch(event.target.value);
  // }

  // const getUser = () => {
  //   return Promise.resolve({ id: '1', name: 'Robin' });
  // };



  // test 02


  // const title = 'Hello RAFID';
  // const [search, setSearch] = React.useState('');

  // function handleChange(event) {
  //   setSearch(event.target.value);
  // }

  // function Search({ value, onChange, children }) {
  //   return (
  //     <div>
  //       <label htmlFor="search">{children}</label>
  //       <input
  //         id="search"
  //         type="text"
  //         value={value}
  //         onChange={onChange}
  //       />
  //     </div>
  //   );
  // }

  // test 03
  const URL = 'http://hn.algolia.com/api/v1/search';
  const [stories, setStories] = React.useState([]);
  const [error, setError] = React.useState(null);

  async function handleFetch(event) {
    let result;

    try {
      result = await axios.get(`${URL}?query=React`);

      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }
  

  return (
    // test 01

    // <div>
    //   {user ? <p>Signed in as {user.name}</p> : null}

    //   <search value={search} onChange={handleChange}>
    //     Search:
    //   </search>

    //   <p>Searches for {search ? search : '...'}</p>
    // </div>
    
    
    // test 02
    // <div>
    //     <h1>Hello World</h1>
    //     {title}

    //     <div>
    //   <Search value={search} onChange={handleChange}>
    //     Search:
    //   </Search>

    //   <p>Searches for {search ? search : '...'}</p>
    // </div>
    // </div>
    
    // test 03
    <div>
      <button type="button" onClick={handleFetch}>
        Fetch Stories
      </button>

      {error && <span>Something went wrong ...</span>}

      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
    

  )
}
