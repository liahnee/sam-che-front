import '../../stylesheets/component/common/topMenu.css';
import Links from '../../data/links.json';
const { topMenu } = Links;

export default function TopMenu(props) {
	return (
		<nav id="top-menu">
			<ul>
				{topMenu.map((item, idx) => {
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
