import { connect } from 'react-redux';
import VisibilityButton from '../components/VisibilityButton';
import { setVisibilityAll, setVisibilityCaught, setVisibilityUncaught} from '../actions-reducers';


const mapStateToProps = (state)=>{
    return{
        visibilityFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        handleAll: () => {setVisibilityAll()},
        handleCaught: () => {setVisibilityCaught()},
        handleUncaught: () => {setVisibilityUncaught()}
    }
}


const makeComponentSmart = connect(mapStateToProps,mapDispatchToProps);
const SmartVisibilityButton = makeComponentSmart(VisibilityButton);

export default SmartVisibilityButton;