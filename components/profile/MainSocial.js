import Link from "next/link";
import React from "react";

const externalProps = { target: "_blank", rel: "noopener" };

function ProfileButton({ href, external, children }) {
  const link = (
    <a
      href={href}
      className="btn btn-block btn-light flex justify-between"
      {...(external ? externalProps : {})}>
      <div>{children}</div>

      {external && (
        <div>
          <i aria-hidden className="fas fa-external-link-alt"></i>
        </div>
      )}
    </a>
  );

  return external ? link : <Link href={href}>{link}</Link>;
}

const MainSocial = () => (
  <div className="grid gap-1">
    <ProfileButton href="https://github.com/barayuda" external>
      <i aria-hidden className="fab fa-fw mr-1 fa-github"></i>
      GitHub
    </ProfileButton>

    <ProfileButton href="https://linkedin.com/in/barayuda" external>
      <i aria-hidden className="fab fa-fw mr-1 fa-linkedin"></i>
      LinkedIn
    </ProfileButton>

    <ProfileButton href="/resume">
      <i aria-hidden className="far fa-fw mr-1 fa-file-alt"></i>
      Resume
    </ProfileButton>

    <ProfileButton href="/blog">
      <i aria-hidden className="fab fa-fw mr-1 fa-blogger-b"></i>
      Blog
    </ProfileButton>
  </div>
);

export default MainSocial;
