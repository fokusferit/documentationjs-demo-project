import { h, Component } from 'preact';
import Title from '../../components/title/index';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<Title text="This is the Home component." />
			</div>
		);
	}
}
