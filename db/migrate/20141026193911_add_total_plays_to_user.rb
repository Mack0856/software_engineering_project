class AddTotalPlaysToUser < ActiveRecord::Migration
  def change
    add_column :users, :total_songs_played, :integer
    add_column :users, :total_songs_downloaded, :integer
  end
end
