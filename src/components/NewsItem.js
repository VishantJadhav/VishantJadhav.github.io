import React, { Component } from 'react'

export class NewsItem extends Component {
    

    render() {
        let { title, description, imageUrl, newsUrl , author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl?"https://www.aljazeera.com/wp-content/uploads/2023/03/AP23064786208349.jpg?resize=1920%2C1440":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}</p>
                        
                        <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sn btn-dark">Read More</a> 
                        <span className="badge text-bg-danger mx-3" >{source}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem