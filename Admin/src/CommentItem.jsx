import React from 'react';
import { UserBadge } from './App'; // Импортируем твой бейдж

function CommentItem({ comment }) {
  return (
    <div style={{ padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <strong>{comment.author}</strong>
        <UserBadge isAdmin={comment.isAdmin} />
      </div>
      <p style={{ margin: '5px 0 0' }}>{comment.text}</p>
    </div>
  );
}

export default CommentItem;