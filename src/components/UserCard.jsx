import React from 'react';

const UserCard = ({ user, onSignOut }) => {
    return (
        <div className="card">
            <img src={user.image} className="card-img-top" alt={user.name} />
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                    {user.email}
                </p>
                <button className="btn btn-primary btn-block" onClick={onSignOut}>Sair</button>
            </div>
        </div>
    );
}

export default UserCard;