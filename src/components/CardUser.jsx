import React from 'react';
import './styles/cardUser.css';

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {


    const handleDelete = () =>{
        deleteUser('/users', user.id);
    }

    const handleEdit = () => {
        setEditUser(user);
        setIsOpen(true);
    }

  return (
    <articule>
        <h3>{user.first_name} {user.last_name}</h3>
        <ul>
            <li><span>Correo: </span><span> {user.email} </span></li>
            <li><span>Cumpleaños: </span><span> {user.birthday} </span></li>
        </ul>
        <button onClick={handleDelete}> Eliminar </button>
        <button onClick={handleEdit}> Editar </button>
    </articule>
  )
}

export default CardUser;