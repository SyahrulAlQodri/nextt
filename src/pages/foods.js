import axios from 'axios';

const Foods = ({ foods }) => {
  return (
    <div>
      <h1>List Makanan</h1>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            <h2>{food.name}</h2>
            <p>{food.description}</p>
            <img src={food.imageUrl} alt={food.name} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get('https://api-bootcamp.do.dibimbing.id/api/v1/foods'); {
    header: {apikey: "w05KkI9AWhKxzvPFtotUva-"}
  }

  return {
    props: {
      foods,
    },
  };
}

export default Foods;