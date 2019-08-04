import React, { Component } from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForms  from './PostForms';
import Spinner from '../common/Spinner';
import { POINT_CONVERSION_COMPRESSED } from 'constants';
import { getPosts } from '../../actions/postActions';
import PostFeed from './PostFeed';

class Posts extends Component {

    componentDidMount(){
      this.props.getPosts()
    }
    render(){

      const { posts, loading} = this.props.post;
      let postContent;

      if(posts === null || loading ){
        postContent = <Spinner />
      }else{
        postContent = <PostFeed posts={posts} />
      }
        return(
            <div className="feed">
              <div className="container">
                <div  className="col-md-12">
                <div className="row">
                  <PostForms />
                  {postContent}
                </div>
                </div>
              </div>
            </div>
        )
    }
}

Posts.propTypes = ({
  getPosts:propTypes.func.isRequired,
  post: propTypes.object.isRequired
})
const mapStateToProps = state => ({
  post:state.post
})
export default connect(mapStateToProps, {getPosts} )(Posts);