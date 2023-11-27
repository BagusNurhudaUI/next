import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const nodemailer = require("nodemailer");
// const fs = require("fs").promises;
// const path = require("path");
// const handlebars = require("handlebars");

// const relativeTemplatePath = "../view/email.html";
const emailer = process.env.EMAILER;
const gmailPass = process.env.GMAILPASS;

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, message } = await req.json();

    // Implement your email sending logic here
    console.log("Form Data neww:", { name, email, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailer,
        pass: gmailPass,
      },
      from: emailer,
    });

    // const email = user.dataValues.email;
    const options = {
      from: `Bagus Nurhuda's Web <${emailer}>`,
      to: "bagusn05@gmail.com",
      subject: `${name} - ${email}`,
      text: message,
      // html: <div>{message}</div>,
      // html: finalHtml,
    };

    const result = await transporter.sendMail(options);
    console.log({ result });

    // Respond to the client
    return NextResponse.json(
      {
        message: "Email sent successfully",
        data: { accepted: result?.accepted, response: result?.response },
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.log({ err });
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Successfully get" }, { status: 200 });
}
