import '../../stylesheets/component/common/topMenu.css';
import Links from '../../data/links.json';
const { bottomMenu } = Links;

export default function BottomMenu(props) {
	return (
		<nav id="top-menu">
			<ul>
				{bottomMenu.map((item, idx) => {
					return (
						<a href={item.link}>
							<li className="menu-item"><span>{item.text}</span></li>
						</a>
					);
				})}
			</ul>
		</nav>
	);
}
