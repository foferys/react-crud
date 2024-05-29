
// questo useSelector ci da l'accesso al reducer in main jsx
import { useSelector } from 'react-redux'


function Home() {

  const users = useSelector((state) => state.users);
  console.log(users);


  return (
    <div className='container'>

      <h2>Crud app with json server</h2>

      <button className='btn btn-succes my-3 bg-success text-white'>Create+</button>
      <table className="table" >
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>

          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className='btn btn-sm btn-primary'>Edit</button>
                <button className='btn btn-sm btn-danger ms-3'>Delete</button>
              </td>
            </tr>
          ))}
            
        </tbody>
      </table>

      
    </div>
  )
}

export default Home
