import nodemailer from 'nodemailer';

// const nn = require('.')

const sendEmail = async (notif, to, subject, text, link) => {
	try {
		const transporter = nodemailer.createTransport({
			host : 'smtp.gmail.com',
            service : 'gmail',
			port: 587,
			secure: true,
			auth: {
				user: 'jyoti.r.das845@gmail.com',
				pass: `${process.env.APP_PASS}`,
			},
		});

		await transporter.sendMail({
			from: `"${notif}" <jyoti.r.das845@gmail.com>`,
			to: to,
			subject: subject,
			text: text,
            html : `Click on this link to login <a href="${link}">login</a>`
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};

export default sendEmail;