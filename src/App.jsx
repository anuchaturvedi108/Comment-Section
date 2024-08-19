import Comment from './components/Comment';
import './App.css';
import commentsData from './data/comments';
import { updateComment } from './utils/helper';
import { useState } from 'react';

function App() {
  const [comments, setComments] = useState(commentsData);
  const addNewReply = (targetId, newComment) => {
    const newUpdatedComments = updateComment(comments, targetId, newComment);
    setComments(newUpdatedComments);
  };
  return <Comment commentData={comments} addNewReply={addNewReply} />;
}

export default App;
