import smtplib


class Mailer(object):
    def send_mail(self, name, their_email, telephone, message):
        smtp_obj = smtplib.SMTP('127.0.0.1', 8080)
        my_email = "d.thompso@yahoo.com"
        mail_content = "From: {n}\n Address: {e}\n  Telephone: {t}\n\n{m}".format(n=name, e=their_email, t=telephone, m=message)

        smtp_obj.sendmail(their_email, my_email, mail_content)