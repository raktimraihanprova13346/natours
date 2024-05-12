import "./index.scss";

const about = () => {
    return(
        <div className="section-about">
            <h2 className="about-title">
                Exciting Tours for Adventurous People
            </h2>
            <div className="row">
                <div className="col-01">
                    <div className="message-01">
                        <h3 className="message-01-header">You are going to fall in Love in with</h3>
                        <p className="message-01-paragraph">
                            You are going to fall in Love in with. You are going to fall in Love in with. You are
                            going to fall in Love in with. You are going to fall in Love in with
                        </p>
                    </div>

                    <div className="message-02">
                        <h3 className="message-02-header">You are going to fall in Love in with</h3>
                        <p className="message-02-paragraph">
                            You are going to fall in Love in with. You are going to fall in Love in with. You are
                            going to fall in Love in with. You are going to fall in Love in with
                        </p>
                    </div>

                    <div className="button-learn-more">
                        <a href="#" className="button-learn-more-a">Learn More &rarr;</a>
                    </div>

                </div>
                <div className="col-02">
                    <p className="temp">Image Composition</p>
                </div>

            </div>

        </div>
    )
}

export default about;