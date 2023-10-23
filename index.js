const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body === '004') {
		message.reply('Syarat-syarat untuk pencetakan e-KTP karena rusak :\n1. e-KTP fisik yang rusak/buram\n\nSilahkan langsung ke kantor kami atau ke Mall Pelayanan Publik (MPP) untuk melakukan pencetakan e-KTP nya.\nUntuk informasi lainnya mengenai Layanan Dukcapil Kota Mataram silahkan mengunjungi website kami di dukcapil.mataramkota.go.id\nTerima kasih 🙏');
	}else{
		client.sendMessage(message.from, 'Selamat datang di Whatsapp Bot Pelayanan KIA & KTP Dinas Dukcapil Kota Mataram.\nSilahkan mengetik Nomor Kode Layanan sesuai kebutuhan pemohon.\nBerikut Menu Layanan Kami :\n001 - Perekaman e-KTP Baru\n002 - Perekaman e-KTP terlambat\n003 - Pencetakan KTP Hilang\n004 - Pencetakan KTP Rusak\n005 - Pengajuan Cetak KIA\nUntuk informasi lainnya mengenai Layanan Dukcapil Kota Mataram silahkan mengunjungi website kami di dukcapil.mataramkota.go.id\nTerima kasih 🙏')
	}
	console.log(message.body)
});


client.initialize();
 