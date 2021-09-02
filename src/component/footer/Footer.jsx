import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid first-footer">
                <h2><span>Thanks</span> for <span>watch</span>ing</h2>
            </div>
            <div className="container-fluid link-footer text-center text-white">
                <section className="mb-4">
                    <a className="btn btn-outline-light  rounded-circle m-2" href="https://www.facebook.com/dewitgauthier" target="_blank" role="button"><i class="fab fa-facebook-f"></i></a>

                    <a className="btn btn-outline-light rounded-circle m-2" href="https://www.youtube.com/channel/UCrxvLIadB-nMVaBisZ5D-BA" target="_blank" role="button"><i class="fab fa-youtube"></i></a>

                    <a className="btn btn-outline-light rounded-circle m-2" href="https://wakatime.com/dashboard" target="_blank" role="button"><i></i>w</a>

                    <a className="btn btn-outline-light rounded-circle m-2" href="###" role="button"><i class="fab fa-linkedin-in"></i></a>

                    <a className="btn btn-outline-light rounded-circle m-2" href="https://github.com/mr-larson" target="_blank" role="button"><i class="fab fa-github"></i></a>
                </section>
            </div>
            <div className="text-center p-3 bg-dark">
                <span className="text-light">© 2021 Copyright</span>
            </div>
        </footer>
            
    )
}

