import React, { useState } from 'react';

function Oyuncu() {
    const [players, setPlayers] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [playerMoney, setPlayerMoney] = useState(0);
    const [editName, setEditName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editName === '') {
            setPlayers([...players, { name: playerName, money: playerMoney }]);
        } else {
            const updatedPlayers = [...players];
            const index = players.findIndex(player => player.name === editName);
            updatedPlayers[index] = { name: playerName, money: playerMoney };
            setPlayers(updatedPlayers);
            setEditName('');
        }
        setPlayerName('');
        setPlayerMoney(0);
    }

    const handleEdit = (name) => {
        setPlayerName(players.find(player => player.name === name).name);
        setPlayerMoney(players.find(player => player.name === name).money);
        setEditName(name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Player Name:
                    <input type="text" value={playerName} onChange={e => setPlayerName(e.target.value)} />
                </label>
                <label>
                    Player Money:
                    <input type="number" value={playerMoney} onChange={e => setPlayerMoney(e.target.value)} />
                </label>
                <input type="submit" value={editName === '' ? "Add Player" : "Save Changes"} />
            </form>
            {players.map((player, index) => (
                <div key={index}>
                    <p>Name: {player.name}</p>
                    <p>Money: {player.money}</p>
                    <button onClick={() => handleEdit(player.name)}>Edit</button>
                </div>
            ))}
        </div>
    );
}

export default Oyuncu;