import { useState } from 'react';
import styles from './styles.module.css';

export const CommentItem = (props) => {
  const { comment, addNewReply } = props;
  const [showReply, toggleReply] = useState(false);
  const [showAddReply, toggleAddReply] = useState(false);
  const [newComment, setNewComment] = useState('');

  const addCommentUtil = () => {
    if (newComment.trim()) {
      addNewReply(comment.id, newComment.trim());
      toggleAddReply(false);
      toggleReply(true);
      setNewComment('');
    }
  };

  const handleBlur = () => {
    addCommentUtil();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addCommentUtil();
    }
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.details}>
        <div>{comment.comment}</div>
        <div className={styles.controls}>
          {comment.subComments.length > 0 && (
            <span onClick={() => toggleReply(!showReply)}>
              {showReply ? 'Hide Reply' : 'View Reply'}
            </span>
          )}
          <span onClick={() => toggleAddReply(!showAddReply)}>
            {showAddReply ? 'Cancel' : 'Add Reply'}
          </span>
        </div>
      </div>
      {showReply && (
        <div className={styles.subComments}>
          {comment.subComments.map((subComment, index) => (
            <CommentItem
              key={index}
              comment={subComment}
              addNewReply={addNewReply}
            />
          ))}
        </div>
      )}
      {showAddReply && (
        <input
          className={styles.replyBox}
          type="text"
          autoFocus
          placeholder="Enter your reply!"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};
