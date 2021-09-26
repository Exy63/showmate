function Footer(props: { loadingStatus: boolean }) {
  const year = new Date().getFullYear();
  const fullName = "Ilya Prikazchikov";
  return (
    <footer className={props.loadingStatus ? "on-loading" : ""}>
      <a href="https://github.com/Exy63" target="_blank" rel="noreferrer">
        <img
          className="footer-logo"
          src="images/github-logo_icon-icons.com_73546.png"
          alt="github logo"
        />
      </a>
      <p>
        {fullName} ⓒ {year}
      </p>
      <a
        href="https://www.linkedin.com/in/ilyaprikazchikov/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="footer-logo"
          src="images/linkedin_black_logo_icon_147114.png"
          alt="linkedin logo"
        />
      </a>
    </footer>
  );
}

export default Footer;
