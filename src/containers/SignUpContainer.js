import { connect } from 'react-redux'
import SignUp from '../components/SignUp.jsx'
import { signup } from '../actions/signup'

const mapStateToProps = (state) => {
	const { signupData } = state.registerReducer;
  	return { signupData };
}

const mapDispatchToProps = (dispatch) => {
	return {
		registerMe: (payload) => {
       		dispatch(signup(payload));
		}
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);