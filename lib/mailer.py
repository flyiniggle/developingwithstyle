import smtplib
import os


class Mailer(object):
    def send_mail(self, name, their_email, telephone, message):
        smtp_obj = smtplib.SMTP(os.environ["OPENSHIFT_PYTHON_IP"], os.environ["OPENSHIFT_PYTHON_PORT"])
        my_email = "d.thompso@yahoo.com"
        mail_content = "From: {n}\n Address: {e}\n  Telephone: {t}\n\n{m}".format(n=name, e=their_email, t=telephone, m=message)

        smtp_obj.sendmail(their_email, my_email, mail_content)