import React, { useState } from 'react';
import './App.css';



  
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [emojiList, setEmojiList] = useState([]);

  const emojis = [
    { id: 1, emoji: '😀', name: 'Grin' },
    { id: 2, emoji: '😎', name: 'Smiling with Sunglasses' },
    { id: 3, emoji: '😍', name: 'Smiling with Heart-Eyes' },
    { id: 4, emoji: '🥳', name: 'Partying' },
    { id: 5, emoji: '🎉', name: 'Party High-ups' },
    { id: 6, emoji: '🚀', name: 'Rocket' },
    { id: 7, emoji: '⚡', name: 'Huge Voltage' },
    { id: 8, emoji: '💡', name: 'Light Bulb' },
    { id: 9, emoji: '🌟', name: 'Glowing Star' },
    { id: 10, emoji: '🔥', name: 'Fire' },
  ];

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h1>Emoji Search</h1>
      <input
        type="text"
        placeholder="Search emojis..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="emoji-container">
        {filteredEmojis.map((emoji) => (
          <div key={emoji.id} className="emoji-item">
            <span role="img" aria-label={emoji.name}>
              {emoji.emoji}
            </span>
            <span>{emoji.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
  
  


export default App;

