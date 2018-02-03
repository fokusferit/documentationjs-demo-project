import { h, Component } from 'preact';


/**
 * Title component which is a stateless Component
 * @property {Object} props - given props
 * @property {String} props.text - text to render
 */
export default class Title extends Component {
  /**
   * Returns Title Component
   * @returns {Object} JSX Title Element
   * 
   * @example
   * render() {
   *  return (<Title text="This is the Home component." />)
   * }
   */
	render() {
    const text = this.props.text;
		return (<p>{text}</p>);
	}
}
