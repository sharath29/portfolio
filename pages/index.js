import React, { Fragment } from "react";
import { Nav } from "../components/Navbar";
import { Intro, About } from "../components/Intro";
import { Skills, Projects, WorkExp } from "../components/Work";
import { Footer, Contact, Socials } from "../components/Footer";
import {
  about,
  contact,
  intro,
  navigation,
  projects,
  SEO,
  socials,
  work,
  workExp,
} from "../config/config";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About title={about.title} description={about.description} />
      <WorkExp title={workExp.title} exp={workExp.exp} />
      <Projects title={projects.title} cards={projects.cards} />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Socials
        title={socials.title}
        description={socials.description}
        socialLinks={socials.socialLinks}
      />
      <Footer />
    </Fragment>
  );
}
