import axios from 'axios';

const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key': 'cfe1a9598amsh0a3407706b014a5p18a168jsn07c769eff629',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};


export const fetchApiData = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${query}`, options);
    return data;
  } catch (e) { console.log(e) }
}