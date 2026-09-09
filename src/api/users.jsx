const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export async function getUserById(id) {
  const response = await fetch(`${BASE_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
}

export async function getUserPosts(id) {
  const response = await fetch(`${BASE_URL}/users/${id}/posts`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export async function getPostById(postId) {
  const response = await fetch(`${BASE_URL}/posts/${postId}`);

  if (!response.ok) {
    throw new Error("Post not found");
  }

  return response.json();
}