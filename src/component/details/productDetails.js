import React from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';

function Users() {
  // 👇️ get ID from url
  const params = useParams();

  // console.log(params); // 👉️ {userId: '4200'}

  return <h2>userId is 👉️ {params.userId}</h2>;
}

export default function ProductDetails({pizza}) {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              {/* 👇️ link to dynamic path */}
              {/* <Link to={`description/${pizza.cat_id}`} style={{ textDecoration: "none" }}>
                
              </Link> */}
              <Link to={`/description/${pizza}`}> Users</Link>
             
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          {/* 👇️ handle dynamic path */}
          <Route path="/description/:id" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}