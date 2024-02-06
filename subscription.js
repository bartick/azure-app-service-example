async function subscribe(transporter, email, name) {

    try {
      const info = await transporter.sendMail({
        from: '"Bartick" <contact@bartick.me>', // sender address
        to: email, // list of receivers
        subject: "Thanks for Subscribing", // Subject line
        text: `Hi ${name}, thanks for subscribing to my news letter!`, // plain text body
      });
  
      return [info, null];
  
    } catch (error) {
      return [null, error];
    }
  
}

module.exports = subscribe;