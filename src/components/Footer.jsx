import styles from "../styles";

import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/* Links Section */}
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start mr-10">
        {/* Logo */}
        <img
          src="https://media.discordapp.net/attachments/1147791800279515146/1250401623038230529/Picsart_24-03-23_05-54-34-354.png?ex=666acec2&is=66697d42&hm=c20be27e75e802780c7422a9e5492fefb176ced8d9b3d4c9b1bab74f785858a5&"
          alt="playunite-logo"
          className="w-[266px] h-[72px] object-contain"
        />
        {/* Info */}
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Revolutionize the esports career with us!</p>
      </div>

      {/* Footer Links */}
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, i) => (
          <div
            key={`link-${i}`}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            {/* Title */}
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            {/* Links */}
            <ul className="list-none mt-4">
              {footerLink.links.map((link, i) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    i !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Copyright Section */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span className="text-secondary">Nexgensphere Tech</span>. All Rights Reserved.
      </p>

      {/* Social Media */}
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, i) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer hover:invert-[30%] transition ease-in-out duration-150 ${
                i !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
