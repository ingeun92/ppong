import React from 'react'

export default class DefaultLayout extends React.Component {
    render() {
        return (
            <div>
                <div id="wrapper">
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink" />
                        </div>
                        <div className="sidebar-brand-text mx-3">뽕 맛</div>
                        </a>
                        <hr className="sidebar-divider my-0" />
                        <li className="nav-item active">
                        <a className="nav-link" href="/">
                            <span>Welcom to 뽕 World</span></a>
                        </li>
                        <hr className="sidebar-divider" />
                        <div className="sidebar-heading">
                            Playground
                        </div>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/playing">
                                <span>Playing</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/money">
                                <span>Money</span>
                            </a>
                        </li>
                        <hr className="sidebar-divider" />
                        <div className="sidebar-heading">
                            기록 보관소
                        </div>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/admin/sensors">
                                <span>승률 조회</span>
                            </a>
                        </li>
                    </ul>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        </nav>
                        { this.props.children }
                        </div>
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright © Your Website 2019</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up" />
                </a>
                <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Select "Logout" below if you are ready to end your current session.
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
