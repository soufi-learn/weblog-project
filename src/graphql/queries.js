import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      id
      title
      slug
      photoCover {
        url
      }
      authors {
        ... on Author {
          name
          avatar {
            url
          }
        }
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_DETAILS = gql`
  query getAuthorDetails($slug: String!) {
    author(where: { slug: $slug }) {
      name
      field
      image {
        url
      }
      description {
        html
      }
      posts {
        photoCover {
          url
        }
        title
        slug
        id
      }
    }
  }
`;

const GET_BLOG_DETAILS = gql`
  query getBlogDetails($slug: String!) {
    post(where: { slug: $slug }) {
      content {
        html
      }
      title
      photoCover {
        url
      }
      authors {
        ... on Author {
          name
          field
          slug
          avatar {
            url
          }
        }
      }
    }
  }
`;

const GET_BLOG_COMMENTS = gql`
  query getBlogComments($slug: String!) {
    comments(where: { post: { slug:$slug } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_DETAILS,
  GET_BLOG_DETAILS,
  GET_BLOG_COMMENTS
};
