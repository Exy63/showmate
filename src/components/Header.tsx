function Header() {
  const year = new Date().getFullYear();

  return (
    <header>
      <a href="/showmate/#">
        <div className="logo">
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/clapper-board_1f3ac.png"
            draggable="false"
            alt="clapper emoji"
          />
        </div>
        <h1> ShowMate</h1>
      </a>
      <h3 className="info">Best TV Shows of {year} and All Time</h3>
    </header>
  );
}

export default Header;
