import { Link } from 'react-router';
import TiHome from 'react-icons/lib/ti/home';
import FaCalendarPlusO from 'react-icons/lib/fa/calendar-plus-o';
import FaListOl from 'react-icons/lib/fa/list-ol';

export const Menu = () => 
	<nav className="menu">
		<Link to="/" activeClassName="selected">
			<TiHome />
		</Link>
		<Link to="/add-day" activeClassName="selected">
			<FaCalendarPlusO />
		</Link>
		<Link to="/list-days" activeClassName="selected">
			<FaListOl />
		</Link>
	</nav>