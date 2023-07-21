import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import UseFavorites from '../../hooks/useFavorites';
const Header = () => {
  const { favorites } = UseFavorites();
  return (
    <header className={styles.header}>
      <BsFillBookmarkHeartFill fontSize={20} />
      <span>{favorites.length}</span>
    </header>
  );
};

export default Header;
