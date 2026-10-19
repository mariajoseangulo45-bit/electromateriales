
/* =====================================================
   RESPONSIVE TABLET
===================================================== */

@media (max-width: 950px) {

    .location-grid {
        grid-template-columns: 1fr;
    }

    .location-info {
        text-align: center;
    }

    .section-label {
        justify-content: center;
    }

    .location-description {
        margin-left: auto;
        margin-right: auto;
    }

    .contact-items {
        max-width: 700px;
        margin: auto;
        text-align: left;
    }

    .map-container {
        height: 400px;
    }

    .opinion-banner {
        height: 130px;
    }
}


/* =====================================================
   RESPONSIVE CELULAR
===================================================== */

@media (max-width: 650px) {

    .location {
        padding: 50px 0;
    }

    .location-container {
        width: 90%;
    }

    .location-info h2 {
        font-size: 38px;
        letter-spacing: -1px;
    }

    .contact-items {
        grid-template-columns: 1fr;
    }

    .contact-item {
        min-height: 145px;
    }

    .map-container {
        height: 320px;
    }

    .map-location-card {
        width: 190px;
    }

    .opinion-banner {
        height: auto;
        min-height: 300px;

        padding: 25px;

        flex-direction: column;
        align-items: flex-start;
    }

    .leaf-decoration {
        margin-left: 0;
    }

    .opinion-title {
        border-left: none;

        padding-left: 0;
        padding-right: 0;

        height: auto;

        margin-bottom: 15px;
    }

    .opinion-separator {
        display: none;
    }

    .opinion-text {
        width: 80%;

        padding-left: 0;

        margin-bottom: 20px;
    }

    .opinion-button {
        margin-left: 0;
    }

    .building-image {
        width: 100%;
        height: 100px;

        bottom: 0;
        right: 0;

        opacity: .5;
    }

    .banner-circle-1,
    .banner-circle-2 {
        display: none;
    }
}


/* =========================
   CONTACTO
========================= */

.contact-section {

    padding: 80px 0;

    background-color: var(--gris-claro);
}


.contact-grid {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 60px;

    align-items: center;
}


.contact-section p {

    color: var(--gris);

    font-size: 14px;
}


.contact-form {

    background-color: white;

    padding: 30px;

    border-radius: var(--radio);

    box-shadow: 0 5px 20px rgba(0,0,0,0.05);

    display: flex;

    flex-direction: column;

    gap: 12px;
}


.contact-form input,
.contact-form textarea {

    width: 100%;

    border: 1px solid var(--borde);

    padding: 12px;

    border-radius: 5px;

    outline: none;

    font-size: 13px;
}


.contact-form textarea {

    height: 100px;

    resize: vertical;
}


.contact-form input:focus,
.contact-form textarea:focus {

    border-color: var(--verde);
}


/* =========================
   FOOTER
========================= */

.footer {

    background-color: var(--verde-oscuro);

    color: white;

    padding-top: 55px;
}


.footer-grid {

    display: grid;

    grid-template-columns: 2fr 1fr 1fr 1fr;

    gap: 40px;

    padding-bottom: 45px;
}


.footer-brand p {

    margin-top: 15px;

    max-width: 250px;

    color: rgba(255,255,255,0.7);

    font-size: 12px;
}


.footer-column {

    display: flex;

    flex-direction: column;

    gap: 8px;
}


.footer-column h3 {

    font-size: 14px;

    margin-bottom: 8px;
}


.footer-column a {

    color: rgba(255,255,255,0.7);

    font-size: 12px;
}


.footer-column a:hover {

    color: white;
}


.socials {

    display: flex;

    gap: 8px;

    margin-top: 15px;
}


.socials a {

    width: 30px;

    height: 30px;

    border: 1px solid rgba(255,255,255,0.3);

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 11px;
}


.footer-bottom {

    border-top: 1px solid rgba(255,255,255,0.15);

    padding: 20px 0;

    text-align: center;
}


.footer-bottom p {

    font-size: 10px;

    color: rgba(255,255,255,0.6);
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

    .nav-menu {

        gap: 15px;
    }


    .hero-content,
    .eco-content,
    .location-grid,
    .contact-grid {

        grid-template-columns: 1fr;
    }


    .hero-image {

        height: 350px;
    }


    .cards-grid {

        grid-template-columns: 1fr;
    }


    .category-grid {

        grid-template-columns: repeat(4, 1fr);
    }


    .products-grid {

        grid-template-columns: repeat(2, 1fr);
    }


    .footer-grid {

        grid-template-columns: 2fr 1fr 1fr;
    }

}


@media (max-width: 650px) {

    .header {

        position: relative;
    }


    .navbar {

        flex-direction: column;

        padding: 15px 0;

        gap: 15px;
    }


    .nav-menu {

        width: 100%;

        justify-content: center;

        flex-wrap: wrap;

        gap: 12px;
    }


    .nav-menu a {

        font-size: 11px;
    }


    .hero {

        text-align: center;
    }


    .hero-text {

        padding: 40px 0 20px;
    }


    .hero-buttons {

        justify-content: center;
    }


    .hero-image {

        height: 280px;
    }


    .stats-grid {

        grid-template-columns: 1fr;

        padding: 20px 0;
    }


    .stat {

        border-right: none;

        border-bottom: 1px solid rgba(255,255,255,0.2);

        padding: 10px;
    }


    .stat:last-child {

        border-bottom: none;
    }


    .section {

        padding: 60px 0;
    }


    .section-header h2,
    .location-info h2,
    .contact-section h2 {

        font-size: 27px;
    }


    .category-grid {

        grid-template-columns: repeat(3, 1fr);
    }


    .products-grid {

        grid-template-columns: 1fr;
    }


    .final-content {

        flex-direction: column;

        text-align: center;
    }


    .footer-grid {

        grid-template-columns: 1fr 1fr;
    }

}


@media (max-width: 400px) {

    .category-grid {

        grid-template-columns: repeat(2, 1fr);
    }


    .footer-grid {

        grid-template-columns: 1fr;
    }

}