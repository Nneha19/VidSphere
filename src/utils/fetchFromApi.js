import axios from 'axios'

const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':'01d5084b4emshd26e76a03c9e3b1p1456eejsn5599d5d33597' ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi= async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }