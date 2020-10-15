import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (<div className="single_movie">
                <h2 className="top">{location.state.title}</h2>
                <div className="middle">
                    <h3>{location.state.year}</h3>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="movie__genres">
                        {location.state.genres.map((genre, index) => (
                            <span key={index} className="genres__genre">
                                {genre}
                        &nbsp;&nbsp;</span>
                        ))}
                    </div>
                </div>
                <h3 className="buttom">{location.state.summary}</h3>
            </div>);

        } else {
            return null;
        }
    }
}

export default Detail;