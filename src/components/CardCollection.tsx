import { ShowI } from "../interfaces";
import Card from "./Card";

const CardCollection = (props: { showsData: ShowI[]; loading: boolean }) => {
  if (props.loading) {
    return (
      <img className="loading-gif" src="images/loading.gif" alt="loading" />
    );
  }

  return (
    <div>
      {props.showsData.map((show) => (
        <Card
          key={show.id}
          image={show.image.medium  ||
            "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png" // no image available picture
          }
          genres={show.genres}
          name={show.name}
          country={
            show.network?.country?.name || show.webChannel?.country?.name
          }
          runtime={show.runtime}
          rating={show.rating.average}
        />
      ))}
    </div>
  );
};

export default CardCollection;
