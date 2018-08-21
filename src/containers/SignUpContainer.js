import { connect } from 'react-redux'
import SignUp from '../components/SignUp.jsx'
import { signup } from '../actions/signup'

const mapStateToProps = (state) => {
	console.log("mapStateToProps: ",state.registerReducer)
	const { signupData } = state.registerReducer;
  	return { signupData };
}

const mapDispatchToProps = (dispatch) => {
	return {
		registerMe: (payload) => {
			console.log("Container payload1:",payload)
       		dispatch(signup(payload));
		}
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);