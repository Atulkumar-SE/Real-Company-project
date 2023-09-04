// Jobs.js
import React, { useState } from 'react';
import Content from './Content';
import { Card } from './Card';
import SearchBar from './JobSearchBar';

const Jobs = () => {
  const [filteredContent, setFilteredContent] = useState(Content);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = Content.filter((content) =>
      content.Designation.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContent(filtered);
  };

  return (
    <div className="flex flex-col gap-5">
      <SearchBar onSearch={handleSearch} />
      {filteredContent.length === 0 ? (
        <p>No jobs available as you type "{searchTerm}"</p>
      ) : (
        filteredContent.map((content) => (
          <Card
            key={content.id}
            Designation={content.Designation}
            Exp={content.Exp}
            jobtype={content.jobtype}
            Location={content.Location}
            socialmedia={content.socialmedia}
          />
        ))
      )}
    </div>
  );
};

export default Jobs;
