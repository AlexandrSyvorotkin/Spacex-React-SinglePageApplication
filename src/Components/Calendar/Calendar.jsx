import React from 'react';
import './Calendar.css'

const Calendar = () => {
    return (
        <div>
            <section className="calendar">
                <div className="container">
                    <ul className="calendar-list">
                        <li className="calendar-item">
                            <article className="launches">
                                <div className="launches-image">
                                        <img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt=""/>
                                </div>
                                <div className="launches-content">
                                    <h2 className="launches-title">FalconSat</h2>
                                    <a href="#" className="button launches-details">Подробнее</a>
                                </div>
                            </article>
                        </li>

                        <li className="calendar-item">
                            <article className="launches">
                                <div className="launches-image">
                                    <img src="https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png" alt=""/>
                                </div>
                                <div className="launches-content">
                                    <h2 className="launches-title">
                                        <a href="https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html">
                                            DemoSat
                                        </a>
                                    </h2>
                                    <a href="#" className="button launches-details">Подробнее</a>
                                </div>
                            </article>
                        </li>

                        <li className="calendar-item">
                            <article className="launches">
                                <div className="launches-image">
                                    <img src="https://images2.imgbox.com/3d/86/cnu0pan8_o.png" alt=""/>
                                </div>
                                <div className="launches-content">
                                    <h2 className="launches-title">
                                        <a href="#">
                                            Trailblazer
                                        </a>
                                    </h2>
                                    <a href="#" className="button launches-details">Подробнее</a>
                                </div>
                            </article>
                        </li>

                        <li className="calendar-item">
                            <article className="launches">
                                <div className="launches-image">
                                    <img src="https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png" alt=""/>
                                </div>
                                <div className="launches-content">
                                    <h2 className="launches-title">
                                        <a href="https://en.wikipedia.org/wiki/Ratsat">
                                            RatSat
                                        </a>
                                    </h2>
                                    <a href="#" className="button launches-details">Подробнее</a>
                                </div>
                            </article>
                        </li>

                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Calendar;