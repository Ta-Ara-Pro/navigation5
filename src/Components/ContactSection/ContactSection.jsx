import React from 'react';
import './ContactSection.css';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section">
      <h2 className="contact-title">{t('contact_title')}</h2>
      <div className="contact-box">
        <div className="contact-form">
          <h3>{t('drop_message')}</h3>
          <p>{t('response_note')}</p>
          <form>
            <div className="form-row">
              <input type="text" placeholder={t('full_name')} />
              <input type="text" placeholder={t('company_name')} />
            </div>
            <input type="email" placeholder={t('work_email')} />
            <input type="text" placeholder={t('subject')} />
            <textarea rows="4" placeholder={t('message')} />
            <button type="submit">{t('send')}</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <img src='/phone.svg' />
            <div>
              <p className="info-bold">+43 664 3810344</p>
              <p className="info-detail">{t('phone_label')}</p>
            </div>
          </div>
          <div className="info-item">
            <img src='/mail.svg' />
            <div>
              <p className="info-bold">office@thebrandnavigation.com</p>
              <p className="info-detail">{t('email_label')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
