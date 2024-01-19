export const postData = async (message) => {
  const url = `/api/posts/`;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ message }),
  });

  if (!response.ok) throw new Error("Unable to fetch posts.", response.error);

  return response.json();
};
export const getAllPosts = async () => {
  const response = await fetch("/api/posts");

  if (!response.ok) throw new Error("Unable to fetch posts.!!");

  return response.json();
};
