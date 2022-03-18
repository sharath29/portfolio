import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = ({ title, description, buttons }) => {
  return (
    <div id="contact" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="px-sm-5">
          <p>{description}</p>
          <div className="">
            {buttons.map((value, index) =>
              value.isPrimary ? (
                <Link key={index} href={value.link}>
                  <a className="btn btn-primary my-1 mx-3">{value.title}</a>
                </Link>
              ) : (
                <Link key={index} href={value.link}>
                  <a className="btn btn-primary my-1 mx-3">{value.title}</a>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Socials = ({ title, description, socialLinks }) => {
  return (
    <div id="contact" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="px-sm-5">
          <p>{description}</p>
          <div className="">
            {socialLinks.map((value, index) => (
              <Link key={index} href={value.link}>
                <a target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    className="icon-style mx-1"
                    icon={value.icon}
                    size="2x"
                  />
                  {value.website}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-secondary text-center py-2 px-5">
      <div className="container text-muted">
        <small>
          &copy; 2022{" "}
          <Link href="https://github.com/sharath29">
            <a>sharath savasere</a>
          </Link>
          . Open sourced with love under{" "}
          <Link href="https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE">
            <a>MIT</a>
          </Link>{" "}
          License
        </small>
      </div>
    </footer>
  );
};
