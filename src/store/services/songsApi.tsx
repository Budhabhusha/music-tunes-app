import axios from "axios";

const getSongsData = async (term = '', offset = 0) => {
    let sreachTeram = term ? term : 'AJ'
    try {
      const response = await axios.get(`https://itunes.apple.com/search/?term=${sreachTeram}&offset=${offset}&limit=15`);
      return response.data.results
    } catch (error) {
      console.error('Error fetching music data:', error);
    }
};

export default getSongsData