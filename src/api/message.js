import { BASE_URL } from './api';

export const getUserPosts = () => fetch(`${BASE_URL}/posts`)
  .then(response => response.json());

export const getPostDetails = postId => fetch(`${BASE_URL}/posts/${postId}`)
  .then(response => response.json());
