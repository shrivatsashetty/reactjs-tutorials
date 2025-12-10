function Info() {
    return (
        <>
            <nav style={{ marginBottom: "20px" }}>
                <Link to="/customer/Emil">Emil</Link> | 
                <Link to="/customer/Tobias">Tobias</Link> |
                <Link to="/customer/Linus">Linus</Link>
            </nav>
            <Outlet />
        </>
    );
}

export default Info;
