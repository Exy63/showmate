function Card(props) {
  // Open array of genres
  let actualGenres = "";
  if (props.genres?.length) {
    for (let i = 0; i < props.genres.length; i++) {
      actualGenres += `${props.genres[i]},\n`;
    }
    actualGenres = actualGenres.substring(0, actualGenres.length - 2)
  }

  console.log("updatedGenres :>> ", actualGenres);

  return (
    <div className="card">
      <img
        className="first-card-el"
        src={
          props.image ||
          "https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png"
        }
        alt="image"
      />
      <p className="next-card-el">{props.name || "?"}</p>
      <pre className="next-card-el">{actualGenres || "?"}</pre>
      <p className="next-card-el">{props.country || "?"}</p>
      <p className="next-card-el">{props.runtime || "?"}</p>
      <p className="next-card-el">{props.rating || "?"}</p>
    </div>
  );
}

export default Card;
