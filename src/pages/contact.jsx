import React from 'react';

export const Contact = () => (
  <div className="about flex-row flex-column-nxl pt5">
    <img
      className="ml-img large-image-nxl self-start self-center-nxl"
      src="/Toronto.png"
      alt="Map of Toronto"
    />
    <div className="flex-column pl7 pl0-nxl pt4-nxl">
      <div className="heading-5 bb-light-grey pb2 mb6">Contact</div>
      {renderSocialImgs()}
    </div>
  </div>
);

const renderSocialImgs = () => (
  <div className="flex-row justify-between items-center">
    {contactImgInfo.map((img, key) => (
      <a
        href={img.img_href}
        className="flex-column items-center contact-link"
        target="_blank"
        rel="noopener noreferrer"
        key={key}
      >
        <img className="contact-img" src={img.img_src} alt={img.img_alt} />
      </a>
    ))}
  </div>
);

const contactImgInfo = [
  {
    img_src: '/github.svg',
    img_css: 'github',
    img_href: 'https://github.com/vovkman/',
    img_alt: 'github'
  },
  {
    img_src: '/google-plus.svg',
    img_css: 'google-plus',
    img_href: 'mailto:liam.vovk@gmail.com',
    img_alt: 'email'
  },
  {
    img_src: '/linkedin.svg',
    img_css: 'linkedin',
    img_href: 'https://www.linkedin.com/in/liamvovk/',
    img_alt: 'LinkedIn'
  }
];
