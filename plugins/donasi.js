let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Telkomsel [081290006012]
│ • Dana [0895323425413]
│ • Saweria [https://saweria.co/Alfian01]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62895323425413
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
