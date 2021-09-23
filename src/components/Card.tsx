function Card(props) {
  /** Get Modified Genres */
  function getGenres(genres: string[]): string {
    let modifiedGenres = "";
    // Open array of genres
    if (genres?.length) {
      for (let i = 0; i < genres.length; i++) {
        modifiedGenres += `${genres[i]},\n`;
      }
      // Delete last comma
      modifiedGenres = modifiedGenres.substring(0, modifiedGenres.length - 2);
    }
    return modifiedGenres;
  }

  const genres = getGenres(props.genres);

  return (
    <div className="card">
      <img
        className="first-card-el"
        src={
          props.image ||
          "https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png" // no image available picture
        }
        alt="cover"
      />
      <p className="next-card-el">{props.name || "?"}</p>
      <pre className="next-card-el">{genres || "?"}</pre>
      <p className="next-card-el">{props.country || "?"}</p>
      <p className="next-card-el">{props.runtime || "?"}</p>
      <p className="next-card-el">{props.rating || "?"}</p>
    </div>
  );
}

export default Card;
