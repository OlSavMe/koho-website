import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonWorks = () => {
  return (
    <>
      <div className="project-pic">
        <Skeleton height={`750px`} width={`100%`} />
      </div>
    </>
  );
};

export default SkeletonWorks;
