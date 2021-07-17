import axios from "axios";

export const login =  async values => {
	 const response = await axios.post(`http://challenge-react.alkemy.org`, values).then(
		 res => {
			 console.log(res);
		 }
	 )
	return response
};
