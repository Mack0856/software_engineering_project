json.array!(@songs) do |song|
  json.extract! song, :id, :title, :artist, :album, :year, :genre, :last_played, :last_download, :total_plays, :total_downloads, :song_path
  json.url song_url(song, format: :json)
end
