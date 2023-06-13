import React, { useCallback } from 'react';

const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
});

const ListItem = React.memo(({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
});

const List = React.memo(({ posts, testFunction }) => {
  console.log('List component rendered')
  return (
    <ul>
      {posts.map((post) => (
        <ListItem post={post} />
      ))}
    </ul>
  );
});

const B = ({ message, posts }) => {
  console.log('B component rendered')
  const testFunction = useCallback(() => {}, [])
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message} />
      <List posts={posts} testFunction={testFunction}/>
    </div>
  );
};

export default B;
