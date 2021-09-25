function Footer(props: { loadingStatus: boolean }) {
  const year = new Date().getFullYear();
  const fullName = "Ilya Prikazchikov";
  return (
    <footer className={props.loadingStatus ? "on-loading" : ""}>
      <p>
        {fullName} ⓒ {year}
      </p>
    </footer>
  );
}

export default Footer;
