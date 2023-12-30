export default function MiddleSecond() {

    return (
        <div className="col-12 col-sm-6 col-lg-3 mb-3">
            <div className="card p-3 border-0 shadow-lg rounded-card" style={{ visibility: "visible" }}>
                <div className="card-heading mb-2">
                    <h3 className="mb-2 h3home">Cloud Hosting Lite</h3>
                    <h4 className="fw-bold">Lite Starter</h4>
                </div>
                <div className="card-price">
                    <s className="text-muted">Rp 28.000</s>
                    <p className="fw-bold text-qw-primary pricehome">Rp 25.000</p>
                </div>
                <div className="card-description">
                    <div className="d-flex align-items-center mt-3">
                        <div className="icon-wrapper me-3 mb-2">
                            <img loading="lazy" src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/disk.webp" alt="disk.webp" width="36px" height="36px" />
                        </div>
                        <div className="label-spec">
                            <div>Disk</div>
                            <p className="fw-bold spechome">5 GB</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <div className="icon-wrapper me-3 mb-2">
                            <img loading="lazy" src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/bandwidth.webp" alt="Bandwidth.webp" width="36px" height="36px" />
                        </div>
                        <div className="label-spec">
                            <div>Bandwith</div>
                            <p className="fw-bold spechome">Unlimited</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <div className="icon-wrapper me-3 mb-2">
                            <img loading="lazy" src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/cpu.webp" alt="core.webp" width="36px" height="36px" />
                        </div>
                        <div className="label-spec">
                            <div>Core CPU</div>
                            <p className="fw-bold spechome">0.5 Core</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <div className="icon-wrapper me-3 mb-2">
                            <img loading="lazy" src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/addon.webp" alt="addon.webp" width="36px" height="36px" />
                        </div>
                        <div className="label-spec">
                            <div>Addon / parked domain</div>
                            <p className="fw-bold spechome">-</p>
                        </div>
                    </div>
                </div>
                <div className="d-grid mt-auto">
                    <a href="https://portal.qwords.com/order/?pid=1007&amp;billingcycle=annually" className="btn btn-cta rounded-5">Pesan Sekarang</a>
                </div>
            </div>
        </div>
    )
}