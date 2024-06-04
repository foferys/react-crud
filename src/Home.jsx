
// questo useSelector ci da l'accesso al reducer in main jsx
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { delUser } from './UserReducer';


function Home() {

  const users = useSelector((state) => state.users);
  // console.log(users);
  const dispatch = useDispatch();

  const handleDelete = (idEl) => {
    dispatch(delUser(idEl))
  }


  return (
    <div className='container'>

      <h2>Crud app with json server</h2>

      <Link to={"/create"} className='btn btn-succes my-3 bg-success text-white'>Create+</Link>
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
                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                <button className='btn btn-sm btn-danger ms-3'>Delete</button>

                {/* Button trigger modal */}
                <button type="button" className="btn btn-sm btn-danger ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Elimina
                </button>
                {/* Modale  */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Eliminazione Utente</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        Sei sicuro di voler eliminarlo?
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn border" data-bs-dismiss="modal">Annulla</button>
                        <button className='btn btn-danger ms-3' onClick={() => handleDelete(user.id)} data-bs-dismiss="modal">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>

              </td>
            </tr>
          ))}
            
        </tbody>
      </table>

      
    </div>
  )
}

export default Home
