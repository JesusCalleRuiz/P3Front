import { FunctionComponent } from "preact";
import {Lover} from "../types.ts"

const Lovers: FunctionComponent<Lover> = (props) => {
  const { name, photo ,age, description} = props;
  return (
    <div>
    <a href={`/${name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className ="lovers-container">
      <h2 class="text-overflow">{name}</h2>
      <img class="img-m half-rounded" src={photo} alt={name} />
      <h3>Edad: {age}</h3>
      <div>{description}</div>
      </div>
      </a>
    </div>
  );
};

export default Lovers;