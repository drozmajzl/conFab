
import {useState} from 'react';
import Reply from './Reply';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faComment, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Comments({ track, user, fetchTracks }) {
    const [commentBody, setCommentBody]=useState("")
    const [showCommentBox, setShowCommentBox]=useState(false)
    const [commentDisplay, setCommentDisplay]=useState([...track.comments])
    const [showHiddenComments, setShowHiddenComments]=useState(false)
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
            fetchTracks()
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
          fetchTracks()
}


const commentForm = (
    <div>
        <form onSubmit={handleAddComment}>
            <input type = "text" value={commentBody} onChange={(e) => setCommentBody(e.target.value)} placeholder="Comment Here"></input>
            <input className="button-28" type = "submit"></input>
        </form>
    </div>
)

    const topComments = commentDisplay.filter((c) => c.comment !== "-deleted-")
    const deletedComments = commentDisplay.filter((c) => c.comment === "-deleted-" && c.user_replies.length > 0)

    const comments = topComments.map((c)=> 
    <div className="comment-box" key={c.id}>
    <h3 className="comment-user"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {c.user.username}:</h3>
    <p className="comment-body">{c.comment} {user.id === c.user_id && c.comment !== "-deleted-" ? <FontAwesomeIcon className="delete-comment-icon" icon={faTrashCan} onClick={()=>handleDeleteComment(c)}></FontAwesomeIcon>: null }</p>
        <Reply fetchTracks={fetchTracks} commentDisplay={commentDisplay} user={user} comment_id={c.id} replies={c.user_replies} addReply={addReply} setAddReply={setAddReply}/>
        </div>
        )

    const hiddenComments = deletedComments.map((c)=> 
    <div className="comment-box" key={c.id}>
    <h3 className="comment-user"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {c.user.username}:</h3>
    <p className="comment-body">{c.comment} {user.id === c.user_id && c.comment !== "-deleted-" ? <span onClick={()=>handleDeleteComment(c)}>🗑</span> : null }</p>
        <Reply fetchTracks={fetchTracks} commentDisplay={commentDisplay} user={user} comment_id={c.id} replies={c.user_replies} addReply={addReply} setAddReply={setAddReply}/>
        </div>
        )

    return(
        <div className="comment_card">
                <h3>Comments:</h3>
                <FontAwesomeIcon className="comment-icon" icon={faComment} onClick={()=>setShowCommentBox(!showCommentBox)}></FontAwesomeIcon>
                <br></br>
                {showCommentBox ? commentForm : null}
                <div className="comment-tree">
                {commentDisplay.length > 0 ? comments : "no comments yet!"}
                </div>
                {hiddenComments.length > 0 ? <p className="see-replies" onClick={()=>setShowHiddenComments(!showHiddenComments)}>Deleted Comments({hiddenComments.length})</p> : null}
                <div className="comment-tree">
                {showHiddenComments ? hiddenComments : null}
                </div>
            </div>
    )
}

export default Comments;