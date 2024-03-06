import axios from "axios";
import {API_GRAPHQL_URL} from "../constants/index";

const instance = axios.create({
    baseURL: process.env.API_GRAPHQL_URL,
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}
});
//
// const conf = {
//     // baseURL: process.env.API_GRAPHQL_URL,
//     timeout: 10000,
//     data: {
//         query: `query GalleryQuery {
//   gallery {
//     nodes {
//       featuredImage {
//         node {
//           title
//           mediaItemUrl
//         }
//       }
//     }
//   }
// }`
//     }
//
// }

export const getGallery = async () => {

    const result = {
        data: [],
        error: true,
    }

    await instance.post(API_GRAPHQL_URL, {
        query: `query GalleryQuery {
  gallery(first: 1, after: "") {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      featuredImage {
        node {
          sourceUrl
        }
      }
      title
    }
  }
}`,
    }).then(res => {

        if (res.data.hasOwnProperty('error')) {

            result.data = [];
            result.error = true;

        } else {
            result.data = res.data.data.gallery;
            result.error = false;
        }

    }).catch(err => {
        console.log(err);

        result.data = [];
        result.error = true;
    });

    return result;
}
