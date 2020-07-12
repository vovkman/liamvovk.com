import React from 'react';

export const About = () => (
  <div className="about flex-row flex-column-nxl pt6">
    <img
      className="medium-img large-image-nxl flip-img self-start self-center-nxl"
      src="/taranaki-full.jpg"
      alt="Mount Taranaki"
    />
    <div className="flex-column pl7 pl0-nxl pt4-nxl">
      <div className="heading-3 pb2">ABOUT</div>
      <div className="paragraph-3 bb-light-grey">
        Improving ad relevance at Amazon using ML.
        <br />
        <br />
        <br />
        <br />
      </div>
        <br />
        <br />
        {renderSocialImgs()}
    </div>
  </div>
);

const renderSocialImgs = () => (
    <div className="flex-row">
        {contactImgInfo.map((img, key) => (
            <a
                href={img.img_href}
                className=""
                target="_blank"
                rel="noopener noreferrer"
                key={key}
            >
                <img className="small-img" src={img.img_src} alt={img.img_alt} />
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
