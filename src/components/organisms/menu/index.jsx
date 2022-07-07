import Link from "next/link";
import styles from './styles.module.scss';

const menuOptions = [{
  to: '/home',
  label: 'Home',
}, {
  to: '/about',
  label: 'About',
}]

const MenuItem = ({
  label,
  to,
}) => (
  <li className={styles.menuItem}>
    <Link href={to}>{label}</Link>
  </li>
)

const Menu = () => (
  <nav className={styles.container}>
    <Link href="/">
      <a className={styles.logo}>
        redstreet.med
      </a>
    </Link>
    <ul className={styles.menu}>
      {menuOptions.map(({ to, label }) => (
        <MenuItem key={to} to={to} label={label} />
      ))}
    </ul>
  </nav>
);

export default Menu;
