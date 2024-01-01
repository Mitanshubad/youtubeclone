import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
   
  
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '7385592c24msh66aa23ba3d44382p19dc74jsn2943de222100',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};



