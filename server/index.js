const express = require('express');
// const ctrl = require('./controller');
const {getAllUsers, getOneUser, createUser, updateUser,deleteUser} = require('./controller')

const app = express();
app.use(express.json());

const port = 4338;

app.get('/api/users', getAllUsers)
app.get('/api/users/:id', getOneUser)
app.post('/api/users', createUser)
app.put('/api/users/:id', updateUser)
app.delete('/api/users/:id', deleteUser)

app.listen(port, () => console.log(`Server running on port ${port}`))

// import axios from 'axios';

// class DeleteButton extends React.Component{

//     deleteUser = (id) => {
//         axios.delete(`http://localhost4338/api/users/${id}`)
//         .then(res => {
//             this.setState({
//                 users: res.data
//             })
//         })
//     }

//     render() {
//         return (
//             <div className="button-container">
//                 <button onClick={() => this.deleteUser(id)}></button>
//             </div>
//         )
//     }
// }