import styles from './RecipeItem.module.css';
import { useSelector } from 'react-redux';
import UseActions from '../../hooks/useActions';
import UseFavorites from '../../hooks/useFavorites';
const RecipeItem = ({ recipe }) => {
  const { favorites } = UseFavorites();
  const { toggleFavorites } = UseActions();

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <img src={recipe.image} alt={recipe.name} width={100} />
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExists ? 'Remove from' : 'Add to'} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
