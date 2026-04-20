import React, { useState } from 'react';
import AddComment from './AddComment';
import CommentItem from './CommentItem';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const handleAdd = (newComment) => {
    setComments([newComment, ...comments]);
  };
  return (
    <div>
      <AddComment onAdd={handleAdd} />
      <div className="comments-list">
        {comments.map(item => (
          <CommentItem key={item.id} comment={item} />
        ))}
      </div>
    </div>
  );
};

export default Comments;