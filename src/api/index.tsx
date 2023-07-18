
import axios from "axios";
const getSongsData = async (term = '', offset = 0) => {
    try {
      const response = await axios.get(`https://itunes.apple.com/search/?term=${term}&offset=${offset}&limit=10`);
      return response.data.results
    } catch (error) {
      console.error('Error fetching music data:', error);
    }
};

export default getSongsData