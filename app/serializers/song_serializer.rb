require 'json'
class SongSerializer
	def serialize(songs)
		serialized_songs = {}
		songs.each do |song|
			serialized_songs.merge!({ id: song.id, song: song.to_json })
		end
		serialized_songs
	end
end