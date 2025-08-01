        /* Section styles */
        section {
            padding: 6rem 5%;
            position: relative;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 3rem;
            text-align: center;
        }

        .section-title span {
            color: #09f;
        }

        /* About section */
        #about {
            background-color: #0a0a0a;
        }

        .about-content {
            display: flex;
            align-items: center;
            gap: 4rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .about-text {
            flex: 1;
        }

        .about-text h3 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
        }

        .about-text p {
            margin-bottom: 1.5rem;
            line-height: 1.7;
            opacity: 0.9;
        }

        .about-image {
            flex: 1;
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .about-image img {
            width: 100%;
            height: auto;
            display: block;
        }

        /* Features section */
        #features {
            background-color: #111;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .feature-card {
            background: rgba(20, 20, 20, 0.7);
            border-radius: 15px;
            padding: 2rem;
            transition: transform 0.3s, box-shadow 0.3s;
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 153, 255, 0.1);
        }

        .feature-icon {
            font-size: 2.5rem;
            color: #09f;
            margin-bottom: 1.5rem;
        }

        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .feature-card p {
            opacity: 0.8;
            line-height: 1.6;
        }

        /* Team section */
        #team {
            background-color: #0a0a0a;
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2.5rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .team-member {
            text-align: center;
        }

        .member-image {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            margin: 0 auto 1.5rem;
            overflow: hidden;
            border: 3px solid #09f;
            position: relative;
        }

        .member-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .team-member h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }

        .team-member p {
            color: #09f;
            opacity: 0.9;
            margin-bottom: 1rem;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }

        .social-links a {
            color: #fff;
            opacity: 0.7;
            transition: opacity 0.3s;
        }

        .social-links a:hover {
            opacity: 1;
        }

        /* Contact section */
        #contact {
            background-color: #111;
        }

        .contact-container {
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            gap: 3rem;
        }

        .contact-info {
            flex: 1;
        }

        .contact-info h3 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .contact-info p {
            margin-bottom: 2rem;
            line-height: 1.6;
            opacity: 0.9;
        }

        .info-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .info-icon {
            font-size: 1.5rem;
            color: #09f;
        }

        .contact-form {
            flex: 1;
            background: rgba(20, 20, 20, 0.7);
            padding: 2rem;
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            color: #fff;
            font-size: 1rem;
        }

        .form-group textarea {
            min-height: 120px;
            resize: vertical;
        }

        /* Footer */
        footer {
            background-color: #000;
            padding: 3rem 5%;
            text-align: center;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .footer-logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: #fff;
            text-decoration: none;
            margin-bottom: 1.5rem;
            display: inline-block;
        }

        .footer-logo span {
            color: #09f;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: #fff;
            text-decoration: none;
            opacity: 0.8;
            transition: opacity 0.3s;
        }

        .footer-links a:hover {
            opacity: 1;
        }

        .social-links-footer {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .social-links-footer a {
            color: #fff;
            font-size: 1.5rem;
            opacity: 0.7;
            transition: opacity 0.3s, transform 0.3s;
        }

        .social-links-footer a:hover {
            opacity: 1;
            transform: translateY(-3px);
        }

        .copyright {
            opacity: 0.6;
            font-size: 0.9rem;
        }