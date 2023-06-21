import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={600}
    viewBox="0 0 400 600"
    backgroundColor="#dce0e0"
    foregroundColor="#efebeb"
    {...props}
  >
    <rect x="24" y="23" rx="20" ry="20" width="360" height="352" /> 
    <rect x="71" y="382" rx="20" ry="20" width="268" height="34" /> 
    <rect x="28" y="424" rx="10" ry="10" width="102" height="25" /> 
    <rect x="28" y="465" rx="10" ry="10" width="102" height="25" /> 
    <rect x="281" y="424" rx="10" ry="10" width="102" height="25" /> 
    <rect x="282" y="465" rx="10" ry="10" width="102" height="25" />
  </ContentLoader>
)

export default Skeleton

