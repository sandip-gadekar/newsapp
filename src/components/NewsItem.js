import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title,discription,imageurl,newsurl,publishDate,author,source}=this.props;
    return (
      <>
        <div>
              <div className="card" >
                <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:0}}>
                  <span className="badge rounded-pill bg-danger">
                   {source}
                  </span>
                </div>
                  <img src={imageurl} className="card-img-top" alt="Sorry Unable to fetch Image"/>
                  <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{discription}...</p>
                      <p className="card-text"><small className="text-muted">Last updated on {new Date(publishDate).toGMTString()} by author {author?author:"unknown"}</small></p>
                      <p></p>
                      <a href={newsurl}  target="blank" className="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
          </div>
        </>
    )
  }
}

export default NewsItem
