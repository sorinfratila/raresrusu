import React from "react"
import DOMPurify from "dompurify"

const post = ({ edge }) => {
  const safeHTML = DOMPurify.sanitize(edge.node.content)
  return <div dangerouslySetInnerHTML={{ __html: safeHTML }}></div>
}

export default post
