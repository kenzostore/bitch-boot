case 'song': 
					case 'play':
	if (args.length < 1) return reply('*Enter the title?*')	
	
	pepe8 = args.join(" ")		
	reply(`*✮⃝🕊️𝕾𝖊𝖆𝖗𝖈𝖍𝖎𝖓𝖌 𝕾𝖔𝖓𝖌✮⃝🕊️*`)					
		anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${pepe8}&apikey=Alphabot`)
		
	if (anu.error) return reply(anu.error)					
				buffer1 = await getBuffer(anu.results.result)
			reply(`*✮⃝🕊️✿𝖀𝖕𝖑𝖔𝖆𝖉𝖎𝖓𝖌 𝖄𝖔𝖚𝖗 𝕾𝖔𝖓𝖌✿✮⃝🕊️*`)			
				denz.sendMessage(from, buffer1, audio, {mimetype: 'audio/mp4', filename: `${anu.results.title}.mp4`, quoted:mek, caption: 'Here bruh😚❤️'})
					break  
 case 'play5': case 'ytmp3':
									if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
									var srch = args.join(' ')
									aramas = await yts(srch);
									aramat = aramas.all 
									var mulaikah = aramat[0].url
									try {
										yta(mulaikah)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then(async (a) => {
												if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
												const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
												await sendMediaURL(from, thumb, captions)
												sendMediaURL(from, dl_link).catch(() => reply('error'))
												}) 
											})
										} catch (err) {
											reply('Terjadi kesalahan')
											}
									break
