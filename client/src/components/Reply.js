import {useState, useEffect} from 'react'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faReply, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Reply({ replies, addReply, setAddReply, comment_id, user, commentDisplay, fetchTracks }){
    const [currentReplies, setCurrentReplies]=useState([...replies])
    const [showReplyBox, setShowReplyBox]=useState(false)
    const [replyBody, setReplyBody]=useState("")
    const [showReplies, setShowReplies]=useState(false)

    useEffect(()=>{
        setCurrentReplies([...replies])
    }, [commentDisplay])

    useEffect(()=>{
        if (addReply !== "" && addReply.comment_id === comment_id){
            setCurrentReplies([...currentReplies, addReply])
            setAddReply("")
        }
    }, [addReply])

    const newReply = {   
        user_id: user.id,
        comment_id: comment_id,
        likes: 0,
        reply_body: replyBody
    }

    // useEffect(()=>{
    //     setCurrentReplies([...replies])
    // },[commentDisplay])

    function handleAddReply(e){
        e.preventDefault();
        fetch("/replies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReply),
        })
          .then((r) => r.json())
          .then((r)=>setAddReply(r))
          setReplyBody("")
          setShowReplyBox(false)
          fetchTracks()
    }

    function handleDeleteReply(replyId){
        fetch(`/replies/${replyId}}`, {
            method: "DELETE",
            }).then((d)=>console.log(d))
            const deleteReply = currentReplies.filter((r)=> r.id !== replyId)
            setCurrentReplies([...deleteReply])
            fetchTracks()
    }
    

    const replyDisplay = currentReplies.map((r)=>
        <div key={r.id}>
          <h4 className="reply-user"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {r.user.name}</h4>
        <p className="reply-body" key={r.id}>{r.reply_body} {user.id === r.user.id ? <FontAwesomeIcon className="delete-comment-icon" icon={faTrashCan} onClick={()=>handleDeleteReply(r.id)}></FontAwesomeIcon> : null }</p>
        </div>
    )

    return(
        <div className="replies-div">
            {currentReplies.length > 0 ?
            <p className="see-replies" onClick={()=>setShowReplies(!showReplies)}>{showReplies ? "Replies" : `See Replies (${currentReplies.length})`}:</p> : null }
            {showReplies ? replyDisplay : null}
            <FontAwesomeIcon className="reply-icon" icon={faReply} onClick={()=>setShowReplyBox(!showReplyBox)}></FontAwesomeIcon>
            {showReplyBox ? <form onSubmit={handleAddReply}>
            <input type = "text" value={replyBody} onChange={(e) => setReplyBody(e.target.value)} placeholder="Comment Here"></input>
            <input className="button-28" type = "submit"></input>
        </form> : null}
        </div>
    )
}

export default Reply;