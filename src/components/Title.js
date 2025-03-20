import React from "react";

const Title = () => {
  console.log("Rendering title");
  return (
    <div>
      <h3>useCallback Hook</h3>
    </div>
  );
};

export default React.memo(Title);
