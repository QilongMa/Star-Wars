import React from 'react';
import {Table, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';
import {selectedFilm} from '../actions/filmsAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Film extends React.Component{
    render(){
        return(
            <div className="col-1-5 clearfix">
                <div className="film-card">
                    <div className="film-card-container" >
                        <div className="film-card-image" style={{backgroundImage: `url(https://cdn.pixabay.com/photo/2017/06/03/18/21/star-wars-2369317_960_720.png)`}}>
                
                        </div>
                        <div className="toggle-play-button">
                            <i className="fa fa-pause"> </i>
                        </div>
                    </div>
            
                    <div className="film-card-user clearfix">
                        <Table className="film-card-details">
                            <Row>
                                <Col xs={9} xsOffset={2} className="film-title"><h3><Link to="/film_actors" onClick={()=>{this.props.selectedFilm(this.props.film)}}>{this.props.film.title}</Link></h3></Col>
                            </Row>
                            <Row>
                                <Col xs={3} xsOffset={2}><h4>Director:</h4></Col>
                                <Col xs={6}><h4>{this.props.film.director}</h4></Col>
                            </Row>
                            <Row>
                                <Col xs={3} xsOffset={2}><h5>Episode:</h5></Col>
                                <Col xs={6}><h5>{this.props.film.episode_id}</h5></Col>
                            </Row>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectedFilm:selectedFilm}, dispatch);
}

export default connect(null,mapDispatchToProps)(Film);