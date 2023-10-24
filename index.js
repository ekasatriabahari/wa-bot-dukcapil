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
	if(message.body === '001') {
		message.reply('Syarat-syarat perekaman e-KTP untuk anak usia 17 tahun :\n1. Membawa fotocpy/asli KK\n2. Yg bersangkutan datang langsung untuk melakukan perekaman e-KTP.\n\nSilahkan langsung ke kantor kami atau ke Mall Pelayanan Publik (MPP) untuk melakukan pencetakan e-KTP nya.\nUntuk informasi lainnya mengenai Layanan Dukcapil Kota Mataram silahkan mengunjungi website kami di dukcapil.mataramkota.go.id\nTerima kasih 🙏');
	}
	else if(message.body === '002') {
		message.reply('Syarat-syarat untuk perekaman e-KTP terlambat / belum punya e-KTP untuk usia lebih dari 17 tahun :\n1. Membawa KK dan (atau) ijasah asli\n2. Mengambil nomor antrian di kantor Kami untuk melakukan perekaman\n3. Yg bersangkutan datang langsung untuk melakukan perekaman e-KTP.\n\nCatatan : untuk pemohon yang melakukan perekaman e-KTP karena sudah pernah bekerja di Luar Negeri silahkan langsung ke Ruang Bidang PIAK untuk melakukan konfirmasi data. Jika belum memiliki akta kelahiran silahkan untuk memproses pembuatan akta kelahiran sekaligus.\n\nUntuk informasi lainnya mengenai Layanan Dukcapil Kota Mataram silahkan mengunjungi website kami di dukcapil.mataramkota.go.id\nTerima kasih 🙏');
	}
	else if(message.body === '003') {
		message.reply('Syarat-syarat untuk pencetakan e-KTP karena hilang:\n1. Surat kehilangan dari polsek setempat\n\nSilahkan langsung ke kantor kami atau ke Mall Pelayanan Publik (MPP) untuk melakukan pencetakan e-KTP nya.\nUntuk informasi lainnya mengenai Layanan Dukcapil Kota Mataram silahkan mengunjungi website kami di dukcapil.mataramkota.go.id\nTerima kasih 🙏');
	}
	else if(message.body === '004') {
		message.reply('Syarat-syarat untuk pencetakan e-KTP karena rusak :\n1. e-KTP fisik yang rusak/buram\n\nSilahkan langsung ke kantor kami atau ke Mall Pelayanan Publik (MPP) untuk melakukan pencetakan e-KTP nya.\nUntuk informasi lainnya mengenai Layanan Dukcapil Kota Mataram silahkan mengunjungi website kami di dukcapil.mataramkota.go.id\nTerima kasih 🙏');
	}
	else if(message.body === '005') {
		message.reply('Syarat-syarat untuk pengajuan pembuatan/pencetakan KIA :\n1. Membawa akta lahir anak asli\n2. Membawa pas foto latar polos (untuk anak usia diatas 5 tahun)\n\nSilahkan langsung ke kantor kami atau ke Mall Pelayanan Publik (MPP) untuk melakukan pencetakan e-KTP nya.\nUntuk informasi lainnya mengenai Layanan Dukcapil Kota Mataram silahkan mengunjungi website kami di dukcapil.mataramkota.go.id\nTerima kasih 🙏');
	}
	else
	{
		client.sendMessage(message.from, 'Selamat datang di Whatsapp Bot Pelayanan KIA & KTP Dinas Dukcapil Kota Mataram.\nSilahkan mengetik Nomor Kode Layanan sesuai kebutuhan pemohon.\nBerikut Menu Layanan Kami :\n001 - Perekaman e-KTP Baru\n002 - Perekaman e-KTP terlambat\n003 - Pencetakan KTP Hilang\n004 - Pencetakan KTP Rusak\n005 - Pengajuan Cetak KIA\nUntuk informasi lainnya mengenai Layanan Dukcapil Kota Mataram silahkan mengunjungi website kami di dukcapil.mataramkota.go.id\nTerima kasih 🙏')
	}
	console.log(message.body)
});


client.initialize();
 