import people from "./Data";

function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }

export default function List() {
    const listItems = people.map(person =>
      <li key={person.id}>
        <img
            src={getImageUrl(person)}
            alt={person.id}
        />
        <p>
            <b>{person.name}:</b>
            {' '+person.profession+' '}
            known for {person.accomplishment}
        </p>
      </li>  
    );
    return(
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>
        </article>
    )
}