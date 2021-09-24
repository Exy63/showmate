function Footer(props: { loading: boolean }) {
  const year = new Date().getFullYear();
  const fullName = "Ilya Prikazchikov";
  return (
    <footer className={props.loading ? "on-loading" : ""}>
      <p>
        {fullName} ⓒ {year}
      </p>
    </footer>
  );
}

export default Footer;
