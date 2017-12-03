import smtplib
import logging
import os

from bs4 import BeautifulSoup

from email.errors import MessageError
from email.mime.text import MIMEText
from email.header import Header

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = '587'
SMTP_USER = "firetrucks"
SMTP_PASSWORD = os.environ.get("EMAILP", "")
SMTP_EMAIL = "%s@gmail.com" % SMTP_USER
SMTP_TO_EMAIL = "d.thompso@yahoo.com"
encoding = 'utf-8'


class Mailer(object):
    def send_mail(self, name, their_email, telephone, message):
        try:
            smtp_obj =  self.connect()

            name = self.clean_input(name)
            message = self.clean_input(message)
            their_email = self.clean_input(their_email)
            telephone = self.clean_input(telephone)
            msg = self.write_mail(name, their_email, message, telephone)
            mail = MIMEText(msg, 'plain', encoding)
            mail['From:'] = Header(their_email, encoding)
            mail['Subject'] = Header('Contact request', encoding)

            smtp_obj.sendmail(SMTP_EMAIL, SMTP_TO_EMAIL, mail.as_string())
            smtp_obj.quit()
        except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused, smtplib.SMTPAuthenticationError) as e:
            logging.exception(e)
            raise MessageError

    def connect(self):
        smtp_obj = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        smtp_obj.ehlo()
        smtp_obj.starttls()
        try:
            smtp_obj.login(SMTP_USER, SMTP_PASSWORD)
        except smtplib.SMTPAuthenticationError:
            smtp_obj.close()
            raise
        return smtp_obj

    def write_mail(self, name, their_email, message, telephone):
        return "From: {n}\nAddress: {e}\nTelephone: {t}\n\n{m}".format(n=name, e=their_email, t=telephone, m=message)

    def clean_input(self, input):
        return BeautifulSoup(str(input), "html.parser").get_text()