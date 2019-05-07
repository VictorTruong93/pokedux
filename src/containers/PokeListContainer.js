// "Smart" container has 3 jobs:
// 1. grab things from redux
// 2. grab a dumb component
// 3. combine them together
import { connect } from 'react-redux';
import PokeList from '../components/PokeList'

// We have 2 jobs,
// 1. tell it how to map redux state to react props;
// 2. tell it how to map redux dispatch to react props;

// "translate" from redux state to react props;
const mapStateToProps=(state)=>{
    // return object, our custom props object
    return{
        // react: redux
        cards: state.cards
    }
    
}; 
// no need to import redux store becuause ReactDom is wrapped by `Provider`
// translate 
const makeComponentSmart = connect(mapStateToProps);
const SmartPokeList = makeComponentSmart(PokeList);

export default SmartPokeList;