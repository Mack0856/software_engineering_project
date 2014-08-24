class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :genre
      t.string :album
      t.date :year

      t.timestamps
    end
  end
end
