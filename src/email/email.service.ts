import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from 'nodemailer';

interface EmailOption {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'rolenche@gmail.com',
        pass: 'hn8423777',
      },
    });
  }

  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = 'http://locahost:3000';

    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    const mailOptions: EmailOption = {
      to: emailAddress,
      subject: '가입 인증',
      html: `
        가입 버튽 누르기 <br/>
        <form action="${url}" method="POST">
        <button>가입확인</button>
        <form/>


        `,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
