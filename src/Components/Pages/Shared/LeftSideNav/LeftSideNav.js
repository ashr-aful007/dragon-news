import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
     const [categories, setCategories] = useState([]);
     useEffect( ()=>{
          fetch('https://dragon-news-server-self-three.vercel.app/news-categoris')
          .then(res => res.json())
          .then(data => setCategories(data))

     },[])
     return (
          <div>
               <p>All Catagory: {categories.length}</p>
               <div>
                    {
                         categories.map(category => <p key={category.id}>
                              <Link to={`/category/${category.id}`}>{category.name}</Link>
                         </p>)
                    }
               </div>
          </div>
     );
};

export default LeftSideNav;