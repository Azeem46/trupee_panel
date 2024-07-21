import React from 'react';
import axios from 'axios';
// import footerLogo from "../../assets/img/logo1.png";
import { Link } from "react-router-dom";
// import footericon2 from "../../assets/img/categories/google_play.png";
// import footericon3 from "../../assets/img/categories/apple.png";
// import { API_BASE_URL } from '../../config/api';

export default class NewOrders extends React.Component {
    state = {
        CategoryList: [],
        SubCategoryList: [],
        SubCategoryListStore: [],
        userID: '',
        newArraylist: [],
        categories:''
    }
    // componentDidMount() {
        
    //   const sendData = {
    //     };
    //     axios({
    //         method: 'get',
    //         url: API_BASE_URL + "category_list/",
    //     })
    //     .then(response => {
    //         this.setState({ CategoryList: response.data.result })
    //         this.setState({ SubCategoryList: response.data.result1 })
    //     })
    // }

    // handle() {
    //   for (let i = 0; i <= this.state.newArraylist.length - 1; i++) {
    //     let dataId = this.state.newArraylist[i]
    
    //     axios({
    //         method: 'get',
    //         url: API_BASE_URL + "sub_category_list/?category_id=" + dataId,
    //     })
    //     .then(response => {
    //         this.setState({ SubCategoryList: response.data.result })
    //         })
    //     }
    // }

    render() {
        const CategoryListData =
        this.state.CategoryList.map((data, i) => {
        this.state.newArraylist.push(data.id);
    
    return (
        <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="footer-widget">
                <div className="fw-title mb-25">
                    <h5>{data.category_name}</h5>
                </div>
                <div className="fw-links">
                    <ul>
                    {this.state.SubCategoryList.map((subdata) => {
                    if (data.id === subdata.categories) {
                                          
                    return (
                        <li> 
                            <Link to={"/tutorsearch/"+data.category_name.replaceAll(" ","_")+'/'+data.id}>
                                {subdata.sub_category_name} 
                            </Link>
                        </li>
                            )}
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
    )
})

        return (

            <footer>
                <div className="footer_section1 footer-top black-bg pt-20 pb-30 main-widget">
                    <div className="container">
                        <div className="row justify-content-between">

                            {CategoryListData}

                        </div>
                    </div>
                </div>

                <div className="footer_section2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    {/* <div className="footer_logo"><img src={footerLogo} alt="" /></div> */}
                                    <div className="fw-text">
                                        <div className="footer-contact-list mt-20">
                                            <ul>
                                                <li><span>Phone: </span>  +569 987 142</li>
                                                <li><span>Email: </span> onlineedu@email.com</li>
                                                <li><span>Address: </span> Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <div className="fw-title mb-25">
                                        <h5>Commuinity</h5>
                                    </div>
                                    <div className="fw-links">
                                        <ul className="quick">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/group_tuition">Group Tuition</Link></li>
                                            <li><Link to="/online_tuition">Online Tuition</Link></li>
                                            <li><Link to="/on_demand">On-Demand Tuition</Link></li>
                                            {/* <li><a href="#"></a></li>
                                            <li><a href="#">Online Tuition</a></li>
                                            <li><a href="#">On-Demand Tuition</a></li> */}
                                                    {/* <li><a href="#">List Requirements</a></li>
                                            <li><a href="#">Home Tuition</a></li>
                                            <li><a href="#">Group Tuition</a></li>
                                            <li> <Link to="tutorsearch">Tutor Search</Link></li>
                                            <li><a href="#">On Demand</a></li>
                                            <li><a href="#">Online Tuition</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <div className="fw-title mb-25">
                                        <h5>Others Link</h5>
                                    </div>
                                    <div className="fw-links">
                                        <ul className="quick">
                                            <li><Link to="/terms">Terms & Conditions</Link></li>
                                            <li><Link to="/policy">Privacy & policy</Link></li>
                                            {/* <li><a href="#"></a></li> */}
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <div className="fw-title mb-25">
                                        <h5>Join Us</h5>
                                    </div>
                                    <div className="fw-links">
                                        <ul className="quick">
                                            <li><Link to="/become_teacher">Become Teacher</Link></li>
                                            <li><Link to="/become_student">Become Student</Link></li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <div className="fw-title mb-25">
                                        <h5>Download App</h5>
                                    </div>
                                    <div className="footer_btns">
                                        {/* <button><img src={} alt="" />Apple iOS</button>
                                        <button>< alt="" />Google Play</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 footer_copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="copyright-text">
                                        Copyright © 2020 Want A Teacher . All Rights Reserved.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    {/* <div className="copyright-text top_bar">
                                    Top Bar <img src={footericon1} alt="" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

