class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :album
      t.integer :year
      t.string :genre
      t.date :last_played
      t.date :last_download
      t.integer :total_plays
      t.integer :total_downloads
      t.string :song_path

      t.timestamps
    end
  end
end
