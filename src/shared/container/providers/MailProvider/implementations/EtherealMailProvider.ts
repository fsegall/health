import IMailProvider from '../models/IMailProvider';
import nodemailer, { Transporter } from 'nodemailer';
interface IMessage {
  to: string;
  body: string;
}

export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: false,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }

  public async sendMail(to: string, body: string): Promise<void> {
    const message = await this.client.sendMail({
      from: 'Safety <safety@safety.com.br>',
      to,
      subject: 'Recuperação de senha',
      text: body,
    });
    console.log(message.messageId, nodemailer.getTestMessageUrl(message));
  }
}
