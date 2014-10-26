class SongSerializer
	def serialize(songs)
		serialized_songs = []
		songs.each do |song|
			song_hash = {
				id: song.id,
				title: song.title,
				artist: song.artist,
				albumn: song.album,
				year: song.year,
				last_played: song.last_played,
				last_download: song.last_download,
				total_plays: song.total_plays,
				total_downloads: song.total_downloads,
				path: song.file.file.path,
				filename: song.file.file.filename
			}
			serialized_songs << song_hash
		end
		serialized_songs
	end
end