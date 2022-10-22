import React, { useEffect, useState } from "react";
import { getRandomUser } from "../../services/axiosService";

const AxiosExample = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    obtainUser();
  }, []);

  const obtainUser = () => {
    getRandomUser()
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.results);
        }
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
      });
  };

  return (
    <div>
      <h1>Axios Example</h1>
      {user != null ? (
        <div>
          {/* <img src={user.picture.large} alt="avatar" /> */}
          <h2>
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <div>
          <p>Generate a new User</p>
          <button onClick={obtainUser}>Random User</button>
        </div>
      )}
    </div>
  );
};

export default AxiosExample;
