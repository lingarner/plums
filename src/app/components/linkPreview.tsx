import React, { useState } from 'react';
import axios from 'axios';

const LinkPreview = ({ url } : { url: string }) => {
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPreviewData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://opengraph.io/api/1.1/site/${encodeURIComponent(url)}`);
      setPreviewData(response.data);
    } catch (error) {
   
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
 

  return (
    <div>
      <button onClick={fetchPreviewData}>Fetch Preview</button>
      {previewData && (
        <div>
          <h3>{previewData.hybridGraph.title}</h3>
          <p>{previewData.hybridGraph.description}</p>
          <img src={previewData.hybridGraph.image} alt="Preview" />
          <p>URL: {previewData.hybridGraph.url}</p>
        </div>
      )}
    </div>
  );
};

export default LinkPreview;
