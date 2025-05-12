function LogoutButton({ user, setUser }) {
    const handleLogout = () => {
        setUser(null);
    };

    return (
        <button className="btn btn-danger fw-semibold " onClick={handleLogout}>

            Logout {user?.displayName && <span>({user.displayName})</span>}
        </button>
    );
}

export default LogoutButton;
