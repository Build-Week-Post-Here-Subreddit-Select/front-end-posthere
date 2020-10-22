import React from "react"

const PostData = props =>{
    
    return(
        <div className="new-added-friends">
          <p> Title:&nbsp;{props.post.name}</p>
          <p> Text:&nbsp;{props.post.age}</p>
         
        </div>
    )
}
export default PostData;