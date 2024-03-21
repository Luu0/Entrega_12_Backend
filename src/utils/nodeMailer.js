import nodemailer from 'nodemailer'
import config from '../Config/config.js'

const transport = nodemailer.createTransport({
  service:'gmail',
  port: 465,
  auth:{
    user:"valentinolucero93@gmail.com",
    pass:"rqdwaamdpadpogso"

  },
  secure:true,
  tls:{
    rejectUnauthorized: false
  }
})

const sendMail = async (email, ticket) =>{
  console.log(email)
  let result = await transport.sendMail({
    from: 'Compras <valentinolucero93@gmail.com>',
    to: email,
    subject: "Su ticket",
    html: `<div> 
        <p>Código:${ticket.code}</p>
        <p>Monto:${ticket.amount}</p>
        <p>Fecha y Hora:${ticket.purchase_datetime}</p>
    </div>`
  })
}

export default sendMail