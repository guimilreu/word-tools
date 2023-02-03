import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { themeActions } from '../store/features/theme/themeSlice';

export default function Navbar() {
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();

	const handleToggleTheme = () => {
		if (theme.mode === 'light') dispatch(themeActions.setDarkTheme());
		else dispatch(themeActions.setLightTheme());
	};

	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${theme.mode} bg-${theme.mode}`}
		>
			<div className="container py-2">
				<Link className="navbar-brand" to="/">
					Word Tools 
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" to="/about">
								About
							</Link>
						</li>
					</ul>
					<div
						className={`form-check form-switch text-${theme.mode === 'light' ? 'dark' : 'light'
							}`}
					>
						<input
							className="form-check-input"
							type="checkbox"
							onClick={handleToggleTheme}
							role="switch"
							id="flexSwitchCheckDefault"
						/>
						<label
							className="form-check-label"
							htmlFor="flexSwitchCheckDefault"
						>
							Enable Dark Mode
						</label>
					</div>
				</div>
			</div>
		</nav>
	);
}
