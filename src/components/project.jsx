import React from 'react';
import { Link } from 'react-router-dom';

export const Project = ({ match }) => {
  const project = projects[match.params.project];
  const nextClass = project.next !== '#' ? 'light-black' : 'light-grey';
  const prevClass = project.prev !== '#' ? 'light-black' : 'light-grey';
  return (
    <div className="flex-column">
      <div className="flex-row flex-column-reverse-nl pt7 pt5-nxl">
        {renderProjectImages(project)}
        <div className="flex-column pl8 pl0-nxl">
          <div className="heading-5 bb-light-grey pb2">{project.title}</div>
          <div className="paragraph-3 pt2 pb2">{project.description}</div>
        </div>
      </div>
      <div className="pt5 flex-row justify-between">
        <span>
          <Link className="light-black" to="/work/">
            Back to Work
          </Link>
        </span>
        <div className="flex-row prev-next text-end">
          <Link to={project.prev} className={prevClass}>
            prev
          </Link>
          <div className="light-black ph0_2">/</div>
          <Link to={project.next} className={nextClass}>
            next
          </Link>
        </div>
      </div>
    </div>
  );
};

const renderProjectImages = project => (
  <div className="flex-row flex-wrap minw65">
    {project.img_src.map((src, key) => (
      <>
        <img
          className={`project small-img medium-img-nxl large-image-nl self-start self-center-nxl pr4 pb6 pr0-nl ${project.img_css}`}
          src={src}
          key={key}
          alt={project.img_alt}
        />
        {project.img_description && (
          <div className="paragraph-3 pb3 w100 text-center">
            {project.img_description[key]}
          </div>
        )}
      </>
    ))}
  </div>
);

export const projects = {
  gighub: {
    title: 'GigHub',
    description:
      'Implemented an iOS and Android application to help connect students with experiential learning opportunies. The application was developed with React Native, NodeJS, and MongoDB, hosted on AWS EC2 instances.',
    img_src: ['/gighub-landing.png', '/gighub-profile.png', '/gighub-gigs.png'],
    img_css: 'gighub-imgs',
    img_alt: 'Gighub',
    next: '/work/ownr/',
    prev: '#',
  },
  ownr: {
    title: 'OWNR',
    description:
      'As a software developer for RBC Ventures I work on the OWNR team. In my time here I have gained expertise in all facets of application development, from building microservices and the front end’s that consume them, to writing scripts that enable one-click deployments of an application.',
    img_src: ['/ownr-1.png', '/ownr-2.png', '/ownr-3.png'],
    img_css: 'ownr-imgs',
    img_alt: 'OWNR',
    prev: '/work/gighub/',
    next: '/work/automated_core_logging/',
  },
  automated_core_logging: {
    title: 'Computer Vision',
    description:
      'Designed a computer vision algorithm for extracting critical angles from rock core using a combination of ELSD, k-means, and ODR. The final product reduced a 30 minute process to 30 seconds.',
    img_src: ['/core-summary.png'],
    img_css: 'core-imgs',
    img_alt: 'Thesis',
    img_description: ['Mapping core breaks onto a 3D plane'],
    prev: '/work/gighub/',
    next: '/work/personal_site/',
  },
  personal_site: {
    title: 'liamvovk.com',
    description: 'Developed by me for fun :)',
    img_src: ['/taranaki-full.jpg'],
    img_css: 'personal-imgs',
    img_alt: 'Personal Website',
    prev: '/work/ownr/',
    next: '#',
  },
};
