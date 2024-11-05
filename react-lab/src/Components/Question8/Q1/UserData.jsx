import axios from "axios";
import React, { useEffect, useState } from "react";

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// },
const UserData = () => {
  const [users, setUsers] = useState([]);
  var nxtid = users.length + 1;
  const [newuser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
        alert("Something went wrong!");
      });
  }, []);

  const addUsers = () => {
    const usertoAdd = {
      ...newuser,
      id: users.length + 1,
    };
    setUsers([...users, usertoAdd]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", usertoAdd)
      .then((res) => {
        console.log("User added successfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong!");
      });
  };
  return (
    <div>
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) =>
                  setNewUser({ ...newuser, name: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) =>
                  setNewUser({ ...newuser, username: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) =>
                  setNewUser({ ...newuser, email: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={(e) =>
                  setNewUser({
                    ...newuser,
                    address: { ...newuser.address, city: e.target.value },
                  })
                }
              />
            </td>
            <td>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={(e) =>
                  setNewUser({ ...newuser, phone: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                name="website"
                placeholder="Website"
                onChange={(e) =>
                  setNewUser({ ...newuser, website: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                name="company"
                placeholder="Company"
                onChange={(e) =>
                  setNewUser({
                    ...newuser,
                    company: { ...newuser.company, name: e.target.value },
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={addUsers}>
                Add User
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UserData;
