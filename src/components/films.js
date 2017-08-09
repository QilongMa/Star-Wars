import React from 'react';
import '../styles/film.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getFilms} from '../actions/filmsAction';
import Film from './film';

class Films extends React.Component{
    
    componentDidMount(){
        this.props.getFilms();
    }
    
    
    render(){
        if(this.props.films.films && this.props.films.films.length > 0) {
            const filmsList = this.props.films.films.map((film, index) => {
                return (
                    <Film film={film} key={index}/>
                )
            });
            
            return(
                <div className="body-container">
                    {filmsList}
                </div>
            )
        }
        else {
            return (
                <div>
                    <h6>Films Loading</h6>
        
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        films:state.films
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({getFilms:getFilms}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Films);