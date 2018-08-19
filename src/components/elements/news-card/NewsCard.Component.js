import React from "react";
import './NewsCard.Component.scss'

class NewsCardComponent extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="news-data-sec">
                <div className="news-card">
                    <div className="graphic-data">
                        <div className="content" style={{backgroundImage: 'url("https://images7.alphacoders.com/411/thumb-1920-411820.jpg")'}}>
                            {/**/}
                        </div>
                    </div>
                    <div className="news-card-body">
                        <div className="user-dtl">
                            <div className="news-card-user">
                                <div className="card-user-wrp shared">
                                    <div className="user-ic">
                                        <a href="#" className="user-medium bg-dynamic usr-img" />
                                        <a href="#" className="user-small bg-dynamic root-usr" />
                                    </div>
                                    <div className="user-data">
                                        <span className="crd-type-tl"><span className="nm">Pawan Rana</span><span className="wt-did">Shared</span><span className="nm">Sudhant's</span><span className="cat">Portfolio</span></span>
                                        <small><span>March 8 at 6:30pm</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>India — Delhi</span></small>
                                    </div>
                                    <div className="user-act">
                                        <a href="#" className="btn btn-square btn-small btn-white"><span className="ion ion-more" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article">
                            <p className="tl">this is the title</p>
                            <article>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci
                                consectetur culpa cum doloremque id in magnam possimus recusandae ut, vel veritatis
                                voluptatum. Et ipsam nisi reprehenderit soluta voluptate.
                            </article>
                        </div>
                    </div>
                    <div className="news-card-footer">
                        <div className="wrp-ftr">
                            <div>
                                <a href="#">Like</a><span>215</span>
                            </div>
                            <div>
                                <a href="#">Comment</a><span>215</span>
                            </div>
                            <div>
                                <a href="#">Share</a><span>215</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-card">
                    <div className="news-card-body">
                        <div className="user-dtl">
                            <div className="news-card-user">
                                <div className="card-user-wrp shared">
                                    <div className="user-ic">
                                        <a href="#" className="user-medium bg-dynamic usr-img" />
                                    </div>
                                    <div className="user-data">
                                        <span className="crd-type-tl"><span className="nm">Pawan Rana</span><span className="wt-did">Shared</span><span className="cat">Thought</span></span>
                                        <small><span>March 8 at 6:30pm</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>India — Delhi</span></small>
                                    </div>
                                    <div className="user-act">
                                        <a href="#" className="btn btn-square btn-small btn-white"><span className="ion ion-more" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article">
                            <p className="tl">this is the title</p>
                            <article>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci
                                consectetur culpa cum doloremque id in magnam possimus recusandae ut, vel veritatis
                                voluptatum. Et ipsam nisi reprehenderit soluta voluptate.
                            </article>
                        </div>
                    </div>
                    <div className="news-card-footer">
                        <div className="wrp-ftr">
                            <div>
                                <a href="#">Like</a><span>215</span>
                            </div>
                            <div>
                                <a href="#">Comment</a><span>215</span>
                            </div>
                            <div>
                                <a href="#">Share</a><span>215</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-card">
                    <div className="graphic-data">
                        <div className="content" style={{backgroundImage: 'url("http://www.meteo-tv.ru/upload/iblock/d5e/d5ef8a0c3e09a40e5bd2d8a4a99d5fbb.jpg")'}}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3aYUjm35wN0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />
                            {/**/}
                        </div>
                    </div>
                    <div className="news-card-body">
                        <div className="user-dtl">
                            <div className="news-card-user">
                                <div className="card-user-wrp">
                                    <div className="user-ic">
                                        <a href="#" className="user-medium bg-dynamic usr-img" />
                                    </div>
                                    <div className="user-data">
                                        <span className="crd-type-tl"><span className="nm">Pawan Rana</span><span className="wt-did">Shared</span><span className="cat">Portfolio</span></span>
                                        <small><span>March 8 at 6:30pm</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>India — Delhi</span></small>
                                    </div>
                                    <div className="user-act">
                                        <a href="#" className="btn btn-square btn-small btn-white"><span className="ion ion-more" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article">
                            <p className="tl">this is the title</p>
                        </div>
                    </div>
                    <div className="news-card-footer">
                        <div className="wrp-ftr">
                            <div>
                                <a href="#">Like</a><span>215</span>
                            </div>
                            <div>
                                <a href="#">Comment</a><span>215</span>
                            </div>
                            <div>
                                <a href="#">Share</a><span>215</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}
export default NewsCardComponent;