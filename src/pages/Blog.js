import React from 'react';
import { Link } from 'gatsby';
import classes from './pagesCss/Blog.module.css';

import Layout from '../hoc/Layout/Layout';
// import Post from "../templates/Post/Post"

const Blog = ({ data }) => {
  // console.log("edges", data.allWordpressPost.edges)

  // const edgesMap = data.allWordpressPost.edges.map(edge => {
  //   return <Post key={edge.node.id} data={edge}></Post>
  // })

  return (
    <Layout>
      <div className={classes.Content}></div>
      {/* {edgesMap} */}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     allWordpressPost {
//       edges {
//         node {
//           id
//           slug
//           content
//           author {
//             id
//           }
//           featured_media {
//             id
//           }
//         }
//       }
//     }
//   }
// `

export default Blog;
