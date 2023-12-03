const Header = () => {
    return (
        <div>
            <div className="">
                <div className="col-lg-12 mt-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center' }}>
                    <a href="/" className="logo_container">
                        <img src="https://www.elleman.vn/app/uploads/2018/09/22/logo-thuong-hieu-converse-2-elle-man.jpg" alt="" width="200px" />
                    </a>
                    <nav className="navbar" style={{ display: 'flex' }}>
                        <ul className="navbar_menu">
                            <li><a href="/">home</a></li>
                            <li><a href="#">product</a></li>
                            <li><a href="#">new</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                    </nav>
                    <ul className="mx-3" style={{ display: 'flex', gap: '10px', marginLeft: '80px' }}>
                        <li><a href="/signin"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Sign In
                        </button></a></li>
                        <li><a href="/signup"><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Sign Up
                        </button></a></li>
                    </ul>
                </div>
            </div>

            <div className="">
                <img className="banner" src="https://file.hstatic.net/200000265619/file/banner_danh_muc_-converse-1920x600_2a2adf9383294e468826bdb5c91bf878.jpg" alt="" width="100%" height="600px" />
                <img src="https://file.hstatic.net/200000265619/file/converse-1420x400_13c0eeedbd2f4aabaca1c27cc93b5cc1.jpg" alt="" />
            </div>
        </div>
    )
}

export default Header;