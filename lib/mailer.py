import smtplib
import logging
import os
from email.errors import MessageError
from email.mime.text import MIMEText
from email.header import Header

SMTP_SERVER = 'smtp.mail.yahoo.com'
SMTP_PORT = '587'
SMTP_USER = "d.thompso"
SMTP_PASSWORD = os.environ["OPENSHIFT_EMAIL_P"]
SMTP_EMAIL = "%s@yahoo.com" % SMTP_USER
encoding = 'utf-8'


class Mailer(object):
    def send_mail(self, name, their_email, telephone, message):
        try:
            smtp_obj = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
            smtp_obj.ehlo()
            smtp_obj.starttls()
            smtp_obj.ehlo()
            smtp_obj.login(SMTP_USER, SMTP_PASSWORD)
            their_email = str(their_email)
            msg = "From: {n}\nAddress: {e}\nTelephone: {t}\n\n{m}".format(n=name, e=their_email, t=telephone, m=message)
            mail = MIMEText(msg, 'plain', encoding)
            mail['From:'] = Header(their_email, encoding)
            mail['Subject'] = Header('Contact request', encoding)

            smtp_obj.sendmail(SMTP_EMAIL, SMTP_EMAIL, mail.as_string())
            smtp_obj.quit()
        except Exception as e:
            logging.exception(e)
            raise MessageError