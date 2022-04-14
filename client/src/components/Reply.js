import {useState, useEffect} from 'react'

function Reply({ replies, addReply, setAddReply, comment_id, user }){
    const [currentReplies, setCurrentReplies]=useState([...replies])
    const [showReplyBox, setShowReplyBox]=useState(false)
    const [replyBody, setReplyBody]=useState("")
    const [showReplies, setShowReplies]=useState(false)

    useEffect(()=>{
        if (addReply !== "" && addReply.comment_id === comment_id){
            setCurrentReplies([...currentReplies, addReply])
        }
    }, [addReply])

    const newReply = {   
        user_id: user.id,
        comment_id: comment_id,
        likes: 0,
        reply_body: replyBody
    }

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
    }

    function handleDeleteReply(replyId){
        fetch(`/replies/${replyId}}`, {
            method: "DELETE",
            }).then((d)=>console.log(d))
            const deleteReply = currentReplies.filter((r)=> r.id !== replyId)
            setCurrentReplies([...deleteReply])
    }
    

    const replyDisplay = currentReplies.map((r)=>
        <div key={r.id}>
          <h4>{r.user.name}</h4>
        <p key={r.id}>{r.reply_body} {user.id === r.user.id ? <span onClick={()=>handleDeleteReply(r.id)}>🗑</span> : null }</p>
        </div>
    )

    return(
        <div>
            <button onClick={()=>setShowReplyBox(!showReplyBox)}>reply</button>
            {showReplyBox ? <form onSubmit={handleAddReply}>
            <input type = "text" value={replyBody} onChange={(e) => setReplyBody(e.target.value)} placeholder="Comment Here"></input>
            <input type = "submit"></input>
        </form> : null}
            {currentReplies.length > 0 ?
            <p onClick={()=>setShowReplies(!showReplies)}>{showReplies ? "Replies" : "See Replies"}:</p> : null }
            {showReplies ? replyDisplay : null}
        </div>
    )
}

export default Reply;