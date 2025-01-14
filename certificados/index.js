const nodemailer = require('nodemailer');
const fs = require('fs');
const os = require('os');
const path = require('path');
const dotenv = require('dotenv');
const { format } = require('date-fns');

dotenv.config();

class SendEmail {
    constructor() {
        this.username = os.userInfo().username;
        this.emailRobo = 'botsn@sulnorte.com.br';
        this.passwordRobo = '';
    }

    async enviarEmail() {
        const emailUsuario = `${this.username}@sulnorte.com.br`;
        const date = format(new Date(), "yyyy-MM-dd 'às' HH:mm:ss");

        const mensagem = `
        <html xmlns:v="urn:schemas-microsoft-com:vml">
        <body>
            <p><b>Prezado(a),</b></p>
            <p>Teste com NodeJS .</p>
            <ul>
                <li><b>Operador:</b> ${this.username}</li>
                <li><b>Data:</b> ${date.split(' às ')[0]}</li>
                <li><b>Hora:</b> ${date.split(' às ')[1]}</li>
            </ul>
            <p>--<br>Atenciosamente,</p>
            <table>
                <tr>
                    <td style="vertical-align:top;">
                        <img src="cid:robo" alt="Robô Comandante" width="200" height="200" style="border-radius:50%; display:block;">
                    </td>
                    <td style="padding-left:15px;">
                        <p><b>Cmdte Robô SN</b> - (Versão Beta)<br>
                        Desenvolvimento - Equipe TI<br>
                        <a href="mailto:contato@sulnorte.com.br">suporte@sulnorte.com.br</a><br>
                        <a href="http://www.sulnorte.com.br">www.sulnorte.com.br</a><br>
                        <code>Sabia que estou sempre evoluindo?<br>
                        Em breve, você irá me ver executando ainda mais tarefas automaticamente.</code></p>
                    </td>
                </tr>
            </table>
            <br>
        </body>
        </html>
        `

        
        const caminho = os.platform() === 'win32' ? 
            './res/robo.jpg' : 
            '/home/rasafh/Documentos/javaScript_typeScript/certificados/res/robo.jpg';

        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: this.emailRobo,
                pass: this.passwordRobo
            }
        });

        const mailOptions = {
            from: this.emailRobo,
            to: ['rodrigo.asafh@sulnorte.com.br'], // trocar para email do usuário
            cc: ['lucas.silva@sulnorte.com.br'],
            subject: "TESTE NODEJS",
            html: mensagem,
            attachments: [
                {
                    filename: 'robo.jpg',
                    path: caminho,
                    cid: 'robo' // CID para referenciar no HTML
                }
            ]
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log(`E-mail enviado para ${this.username}`);
        } catch (error) {
            console.error(`Erro ao enviar e-mail para ${this.username}: ${error.message}`);
        }
    }
}

(async () => {
    const mensageiro = new SendEmail();
    await mensageiro.enviarEmail();
})();
