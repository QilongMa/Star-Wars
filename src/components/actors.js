import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getActors} from '../actions/actorsAction';

class Actors extends React.Component{
    constructor(props){
        super(props);
        const actorsArray = this.props.film.characters;
        console.log('-----characters array-----',actorsArray);
        this.props.getActors(actorsArray);
    }
    
    componentDidMount(){
    
    }
    
    render(){
        if(this.props.actorsList && this.props.actorsList.length > 0) {
            const actors = this.props.actorsList.map((actor, index) => {
                return (
                    <div key={index}>{actor.data.name}</div>
                )
            });
            return(
                <div>
                    <h2>Characters In [ {this.props.film.title} ]</h2>
                    {actors}
                </div>
            )
        }
        return (
            <div>
                Loading
            </div>
        )
        
    }
}

function mapStateToProps(state) {
    return {
        film:state.films.selected,
        actorsList:state.people.peopleList
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getActors:getActors}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Actors);