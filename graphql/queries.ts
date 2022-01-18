import gql from "graphql-tag";

export const LAUNCHES_QUERY = gql`
  query getLaunches($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      links {
        flickr_images
      }
    }
  }
`;

export const LAUNCH_QUERY = gql`
  query getLaunch($id: ID!) {
    launch(id: $id) {
      id
      is_tentative
      upcoming
      mission_name
      links {
        article_link
        flickr_images
        mission_patch
      }
      launch_date_utc
      details
    }
  }
`;
