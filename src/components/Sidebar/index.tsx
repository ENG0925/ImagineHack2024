const SideBar = () => {
    return (
        <div id="nav-bar">
            <input id="nav-toggle" type="checkbox">
            <div id="nav-header">
            <a id="nav-title" target="_blank">Hello W<i class="fa-solid fa-earth-asia" style="min-width: 1.8rem"></i>rld</a>
            <label for="nav-toggle">
                <span id="nav-toggle-burger"></span>
            </label>
            <hr>
            </div>

            <div id="nav-content">
            <div class="nav-button"><a href="home_page.html"><i class="fas fa-home"></i><span>Home Page</span></a></div>
            <div class="nav-button"><a href="customer.html"><i class="fa-solid fa-user"></i><span>Customer</span></a></div>
            <div class="nav-button"><a href="supplier.html"><i class="fa-solid fa-box"></i><span>Supplier</span></a></div>
            <div class="nav-button"><a href="invoice.html"><i class="fa-solid fa-file-invoice"></i><span>Invoice</span></a></div>
            <div class="nav-button"><a href="supplier.html"><i class="fa-solid fa-boxes-stacked"></i><span>Items</span></a></div>
            </div>

            <input id="nav-footer-toggle" type="checkbox">
            <div id="nav-footer">
            <div id="nav-footer-heading">
                <div id="nav-footer-titlebox">
                <a id="nav-footer-title"target="_blank">Settings</a>
                </div>
                <label for="nav-footer-toggle">
                <i class="fas fa-caret-up"></i>
                </label>
            </div>
            <div id="nav-footer-content">
                <div class="nav-button"><i class="fas fa-cog"></i><span>Settings</span></div>
                <div class="nav-button"><i class="fas fa-user"></i><span>Profile</span></div>
                <div class="nav-button"><i class="fas fa-sign-out-alt"></i><span>Logout</span></div>
            </div>
            </div>
        </div>
    );
}

export default SideBar; 