import { ShowI } from "../interfaces";
import Card from "./Card";

const CardCollection = (props: {showsData: ShowI[], loading:boolean}) => {
  if (props.loading) {
    return <h2 className='loading'>Loading...</h2>;
  }

  return <div> 
      {props.showsData.map((show) => (
    <Card
      key={show.id}
      image={show.image.medium}
      genres={show.genres}
      name={show.name}
      country={show.network?.country?.name || show.webChannel?.country?.name}
      runtime={show.runtime}
      rating={show.rating.average}
    />))}

    </div>
};


export default CardCollection;
