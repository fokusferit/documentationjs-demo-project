import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';


/**
 * Header component which is a stateless Component
 */
export default class Header extends Component {

  /**
   * @param {Object} props - given props 
   */
  constructor(props){
    super(props);
  }

  /**
   * Returns Header Component
   * @returns {Object} JSX Header Element
   */
	render() {
		return (
			<header class={style.header}>
				<h1>Preact App</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/profile">Me</Link>
					<Link activeClassName={style.active} href="/profile/john">John</Link>
				</nav>
			</header>
		);
	}
}
