export default function MiddleThird() {

    return (
        <div className="card border-0 shadow p-3 rounded-card" style={{ visibility: "visible" }}>
            <div className="card-heading d-flex align-items-center mb-3">
                <div className="icon-wrapper me-2">
                    <img loading="lazy" src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/ssl.webp" alt="ssl.webp" width="36px" height="36px" />
                </div>
                <h3 className="mb-0 fw-bold h5home">SSL</h3>
            </div>
            <div className="card-description">
                <p>
                    Jadikan website Anda lebih terpercaya dan disukai oleh search
                    engine dengan menggunakan SSL Certificate.
                </p>
            </div>
            <div className="card-price mb-4 mt-3">
                <p className="mb-2">Mulai dari</p>
                <p className="text-qw-primary fw-bold pricehome">
                    Rp. 112.000<span className="fs-6 text-dark fw-light"> / tahun</span>
                </p>
            </div>
            <div className="d-grid mt-auto">
                <a href="https://www.qwords.com/services/secured-sockets-layer-certificate/" className="btn btn-cta rounded-5">Pesan Sekarang</a>
            </div>
        </div>
    )
}