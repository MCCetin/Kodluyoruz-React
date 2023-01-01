export async function getData(userId) {
  const user = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  ).json();

  const posts = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  ).json();

  console.log(user);
  console.log(posts);
}
