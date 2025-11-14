import React from "react";

function Greeting({ name, children }) {
  // If name exists, use it. Otherwise default to "World".
  const displayName = name ? name : "World";

  return (
    <div>
      <h1>Hello {displayName}</h1>

      {/* If children exist, show them */}
      {children && <p>{children}</p>}
    </div>
  );
}

export default Greeting;
