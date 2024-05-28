import React from 'react'
import { useSelector } from 'react-redux'


function Home() {

    const users = useSelector((state) => state.users);


  return (
    <div className='container'>

      <h2>Crud app with json server</h2>
      <button className='btn btn-succes my-3'>Create+</button>


        <table class="table table-primary" >
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>

      
    </div>
  )
}

export default Home
