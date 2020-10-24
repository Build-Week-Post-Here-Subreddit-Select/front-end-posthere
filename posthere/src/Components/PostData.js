import React from "./node_modules/react"

const PostData = props =>{
    
    return(
        <div className="new-added-post">
          <p> Title:&nbsp;{props.post.name}</p>
          <p> Text:&nbsp;{props.post.age}</p>
         
        </div>
    )
}
export default PostData;