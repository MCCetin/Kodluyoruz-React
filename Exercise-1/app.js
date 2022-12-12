async function getData(userId) {
  const { data: user } = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: posts } = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  return user + posts;
}
export default getData;
