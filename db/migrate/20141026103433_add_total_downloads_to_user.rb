class AddTotalDownloadsToUser < ActiveRecord::Migration
  def change
    add_column :users, :total_downloads, :integer
  end
end
