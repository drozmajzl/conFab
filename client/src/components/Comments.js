
import {useState} from 'react';
import Reply from './Reply';

function Comments({ track, user, fetchTracks }) {
    const [commentBody, setCommentBody]=useState("")
    const [showCommentBox, setShowCommentBox]=useState(false)
    const [commentDisplay, setCommentDisplay]=useState([...track.comments])
    const [showHiddenComments, setShowHiddenComments]=useState(false)
    
    
    const [currentCommentId, setCurrentcommentId]=useState('')
    const [addReply, setAddReply]=useState("")

    const newComment = {   
        user_id: user.id, 
        track_id: track.id, 
        comment: commentBody, 
        likes: 0
    }

    // const newReply = {   
    //     user_id: user.id,
    //     comment_id: currentCommentId,
    //     likes: 0,
    //     reply_body: replyBody
    // }

      function handleDeleteComment(deleteComment){
        fetch(`/comments/${deleteComment.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: deleteComment.user_id,
              track_id: deleteComment.track_id,
              comment: "-deleted-",
              likes: "0"
            }),
          })
            .then((r) => r.json())
            .then((data)=>{
            const deletedCommentArray = commentDisplay.filter((c)=> c.id !== deleteComment.id)
            setCommentDisplay([...deletedCommentArray, data])
            })
        }



 

function handleAddComment(e){
        e.preventDefault();
        fetch("/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        })
          .then((r) => r.json())
          .then((data)=>setCommentDisplay([...commentDisplay, data]))
        //   .then((setlist) => setSetlists([...setlists, setlist]))
          setCommentBody("")
          setShowCommentBox(false)
}


const commentForm = (
    <div>
        <form onSubmit={handleAddComment}>
            <input type = "text" value={commentBody} onChange={(e) => setCommentBody(e.target.value)} placeholder="Comment Here"></input>
            <input type = "submit"></input>
        </form>
    </div>
)

    const topComments = commentDisplay.filter((c) => c.comment !== "-deleted-")
    const deletedComments = commentDisplay.filter((c) => c.comment === "-deleted-")

    const comments = topComments.map((c)=> 
    <div className="comment-box" key={c.id}>
    <h3>{c.user.username}:</h3>
    <p>{c.comment} {user.id === c.user_id && c.comment !== "-deleted-" ? <span onClick={()=>handleDeleteComment(c)}>🗑</span> : null }</p>
        <Reply user={user} comment_id={c.id} replies={c.user_replies} addReply={addReply} setAddReply={setAddReply}/>
        </div>
        )

    const hiddenComments = deletedComments.map((c)=> 
    <div className="comment-box" key={c.id}>
    <h3>{c.user.username}:</h3>
    <p>{c.comment} {user.id === c.user_id && c.comment !== "-deleted-" ? <span onClick={()=>handleDeleteComment(c)}>🗑</span> : null }</p>
        <Reply user={user} comment_id={c.id} replies={c.user_replies} addReply={addReply} setAddReply={setAddReply}/>
        </div>
        )

    return(
        <div className="comment_card">
                <h3>Comments:</h3>
                <button onClick={()=>setShowCommentBox(!showCommentBox)}>Add Comment</button>
                {showCommentBox ? commentForm : null}
                {commentDisplay.length > 0 ? comments : "no comments yet!"}
                {hiddenComments.length > 0 ? <p onClick={()=>setShowHiddenComments(!showHiddenComments)}>Deleted Comments</p> : null}
                {showHiddenComments ? hiddenComments : null}
            </div>
    )
}

export default Comments;