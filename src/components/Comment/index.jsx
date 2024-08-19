import { CommentItem } from './Item';

const Comment = (props) => {
  const { commentData, addNewReply } = props;
  return (
    <>
      {commentData.map((comment) => (
        <CommentItem
          comment={comment}
          key={comment.id}
          addNewReply={addNewReply}
        />
      ))}
    </>
  );
};

export default Comment;
