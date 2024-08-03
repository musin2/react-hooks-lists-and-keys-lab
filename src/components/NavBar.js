import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const displayLinks = links.map((element) => {
      return <a key={element} href= {"#"+element}>{element}</a>;
  });
  

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {displayLinks}
    </nav>
  );
}

export default NavBar;
