import axios from 'axios';
// axios initialization in an external file
export default axios.create({
  baseURL: `https://ooxvks6089.execute-api.eu-south-1.amazonaws.com/dev/test/facility`,
});
