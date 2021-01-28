import React from "react";

const Picture = () => (
  <div className="profile__image__wrapper">
    <img src="/barayuda-avatar.jpg" alt="Profile" className="rounded w-full" width="191" height="190" />

    <div className="profile__image__emojis">
      <span role="img" aria-label="rocket">
        🚀
      </span>
      <span role="img" aria-label="indonesia-flag">
        🇮🇩
      </span>
      <span role="img" aria-label="beer">
        🍺
      </span>
      <span role="img" aria-label="computer-man">
        👨‍💻
      </span>
    </div>
  </div>
);

export default Picture;
