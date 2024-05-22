"use client"
import { useState } from "react";

export default function AIGMMachine() {
  const [prefix, setPrefix] = useState('Good Morning');
  const [selectedTags, setSelectedTags] = useState([]);
  const [result, setResult] = useState('');

  const tags = ['Inspiration', 'Motivation', 'Wisdom', 'Happiness', 'Love', 'Friendship', 'Success', 'Life', 'Hope'];

  const handleTagClick = (tag) => {
    setSelectedTags(prevSelectedTags => 
      prevSelectedTags.includes(tag) 
        ? prevSelectedTags.filter(t => t !== tag) 
        : [...prevSelectedTags, tag]
    );
  };

  const handleGenerate = async () => {
    const prompt = `${prefix} ${selectedTags.length > 0 ? selectedTags.join(', ') + ' ' : ''}quote`;
    
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, type: 'text' }),
    });

    const data = await response.json();
    setResult(data.choices[0].text);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    alert('Text copied to clipboard!');
  };

  return (
    <div className="machine">
      <span><h3>GM Quote Generator</h3></span>
      <div>
        <p>AI generated GM quotes! Add a tag or generate randomly.</p>
        <div className="tags-container-wrapper">
          <div className="tags-container">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`action-button2 ${selectedTags.includes(tag) ? 'selected' : ''}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="recessed-field2">
        <p id="aiGeneratedText">{result || 'Your inspirational quote will appear here...'}</p>
      </div>
      <button
        onClick={handleGenerate}
        className={`action-button ${selectedTags.length > 0 ? 'selected-generate' : ''}`}
      >
        Generate
      </button>
      <button onClick={handleCopy} className="action-button">
        Copy
      </button>
    </div>
  );
}
